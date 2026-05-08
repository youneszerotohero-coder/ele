import { ImagePlus, Lock, LogOut, Plus, RefreshCw, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../utils/supabase';

const categories = [
  { id: 'substations', label: 'HT/MT substations' },
  { id: 'public', label: 'Public' },
  { id: 'industry', label: 'Industry' },
  { id: 'energy', label: 'Energy' },
];

const emptyForm = {
  category: 'industry',
  labelEn: 'Industry',
  labelFr: 'Industrie',
  metaEn: '',
  metaFr: '',
  titleEn: '',
  titleFr: '',
  descriptionEn: '',
  descriptionFr: '',
  images: [],
};

function Field({ id, label, children }) {
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-bold text-[#0A1730]">
      {label}
      {children}
    </label>
  );
}

function inputClass() {
  return 'w-full min-h-11 border border-[#CAD5E4] bg-white px-3 py-2 text-sm font-semibold text-[#0A1730] outline-none transition focus:border-[#3156A4] focus:ring-2 focus:ring-[#3156A4]/18';
}

export default function AdminPanel() {
  const [authChecked, setAuthChecked] = useState(false);
  const [token, setToken] = useState(null);
  const [login, setLogin] = useState({ email: '', password: '' });
  const [form, setForm] = useState(emptyForm);
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  const imagePreviews = useMemo(() => {
    return form.images.map(image => {
      if (typeof image === 'string') return image;
      return URL.createObjectURL(image);
    });
  }, [form.images]);

  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview, index) => {
        if (typeof form.images[index] !== 'string') {
          URL.revokeObjectURL(preview);
        }
      });
    };
  }, [imagePreviews, form.images]);

  async function loadProjects(currentToken) {
    const activeToken = currentToken || token;
    if (!activeToken) return;

    try {
      const response = await fetch('/api/admin/projects', {
        headers: {
          Authorization: `Bearer ${activeToken}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          handleLogout();
        }
        throw new Error('Failed to load projects');
      }

      const data = await response.json();
      const adminProjects = data.projects.map(p => ({
        id: p.id,
        image: p.image,
        label: p.labelEn,
        title: p.titleEn,
        meta: p.metaEn
      }));
      setProjects(adminProjects);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    if (savedToken) {
      setToken(savedToken);
      loadProjects(savedToken);
    }
    setAuthChecked(true);
  }, []);

  function updateForm(field, value) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  function handleCategoryChange(categoryId) {
    const category = categories.find((item) => item.id === categoryId);

    setForm((currentForm) => ({
      ...currentForm,
      category: categoryId,
      labelEn: category?.label ?? currentForm.labelEn,
      labelFr:
        {
          substations: 'Postes HT/MT',
          public: 'Public',
          industry: 'Industrie',
          energy: 'Énergie',
        }[categoryId] ?? currentForm.labelFr,
    }));
  }

  async function handleLogin(event) {
    event.preventDefault();
    setBusy(true);
    setMessage('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      localStorage.setItem('admin_token', data.token);
      setToken(data.token);
      setLogin({ email: '', password: '' });
      await loadProjects(data.token);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    localStorage.removeItem('admin_token');
    setToken(null);
    setProjects([]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!token) return;
    
    setBusy(true);
    setMessage('');

    try {
      const imagesData = await Promise.all(
        form.images.map(async (image) => {
          if (typeof image === 'string') return image;
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          });
        })
      );

      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          images: imagesData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Could not save project');
      }

      setMessage('Project saved. It is now available in the public portfolio.');
      setForm(emptyForm);
      await loadProjects();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(projectId) {
    if (!token) return;
    setBusy(true);
    setMessage('');

    try {
      const response = await fetch(`/api/admin/projects?id=${projectId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Could not delete project');
      }

      setMessage('Project deleted.');
      await loadProjects();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  if (!authChecked) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#F3EFE3] text-[#0A1730]">
        <RefreshCw className="h-8 w-8 animate-spin text-[#3156A4]" />
      </main>
    );
  }

  if (!token) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#F3EFE3] px-4 py-10 text-[#0A1730]">
        <form onSubmit={handleLogin} className="w-full max-w-sm border border-[#D8DEEA] bg-white p-6 shadow-xl shadow-[#0A1730]/8">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-[#0A1730] text-white">
              <Lock className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-2xl font-black">Admin login</h1>
              <p className="text-sm font-semibold text-[#526174]">SALEG project manager</p>
            </div>
          </div>

          <div className="grid gap-4">
            <Field id="email" label="Email">
              <input
                id="email"
                type="email"
                className={inputClass()}
                value={login.email}
                onChange={(event) => setLogin((currentLogin) => ({ ...currentLogin, email: event.target.value }))}
                autoComplete="email"
                required
              />
            </Field>
            <Field id="password" label="Password">
              <input
                id="password"
                className={inputClass()}
                type="password"
                value={login.password}
                onChange={(event) => setLogin((currentLogin) => ({ ...currentLogin, password: event.target.value }))}
                autoComplete="current-password"
                required
              />
            </Field>
          </div>

          {message && <p className="mt-4 text-sm font-bold text-[#B93018]">{message}</p>}

          <button
            type="submit"
            disabled={busy}
            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#E85D3F] px-4 text-sm font-black text-white transition hover:bg-[#0A1730] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Lock className="h-4 w-4" />
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F3EFE3] px-4 py-6 text-[#0A1730] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 border-b border-[#CAD5E4] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E85D3F]">SALEG admin</p>
            <h1 className="mt-2 text-3xl font-black">Projects</h1>
          </div>
          <div className="flex gap-2">
            <a className="inline-flex h-11 items-center bg-white px-4 text-sm font-black text-[#0A1730]" href="/">
              View site
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex h-11 items-center gap-2 bg-[#0A1730] px-4 text-sm font-black text-white"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
          <form onSubmit={handleSubmit} className="border border-[#D8DEEA] bg-white p-5 shadow-xl shadow-[#0A1730]/8">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center bg-[#3156A4] text-white">
                <Plus className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-xl font-black">Add project</h2>
                <p className="text-sm font-semibold text-[#526174]">English and French content are both required.</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field id="category" label="Category">
                <select
                  id="category"
                  className={inputClass()}
                  value={form.category}
                  onChange={(event) => handleCategoryChange(event.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="images" label={<>Images <span className="text-xs font-medium text-[#526174]">(Append multiple)</span></>}>
                <input
                  id="images"
                  className={inputClass()}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => {
                    const newFiles = Array.from(event.target.files ?? []);
                    updateForm('images', [...form.images, ...newFiles]);
                    event.target.value = '';
                  }}
                />
              </Field>
              <Field id="labelEn" label="Type label EN">
                <input id="labelEn" className={inputClass()} value={form.labelEn} onChange={(event) => updateForm('labelEn', event.target.value)} />
              </Field>
              <Field id="labelFr" label="Type label FR">
                <input id="labelFr" className={inputClass()} value={form.labelFr} onChange={(event) => updateForm('labelFr', event.target.value)} />
              </Field>
              <Field id="metaEn" label="Meta EN">
                <input id="metaEn" className={inputClass()} value={form.metaEn} onChange={(event) => updateForm('metaEn', event.target.value)} />
              </Field>
              <Field id="metaFr" label="Meta FR">
                <input id="metaFr" className={inputClass()} value={form.metaFr} onChange={(event) => updateForm('metaFr', event.target.value)} />
              </Field>
              <Field id="titleEn" label="Title EN">
                <input id="titleEn" className={inputClass()} value={form.titleEn} onChange={(event) => updateForm('titleEn', event.target.value)} />
              </Field>
              <Field id="titleFr" label="Title FR">
                <input id="titleFr" className={inputClass()} value={form.titleFr} onChange={(event) => updateForm('titleFr', event.target.value)} />
              </Field>
              <Field id="descriptionEn" label="Description EN">
                <textarea
                  id="descriptionEn"
                  className={`${inputClass()} min-h-32 resize-y`}
                  value={form.descriptionEn}
                  onChange={(event) => updateForm('descriptionEn', event.target.value)}
                />
              </Field>
              <Field id="descriptionFr" label="Description FR">
                <textarea
                  id="descriptionFr"
                  className={`${inputClass()} min-h-32 resize-y`}
                  value={form.descriptionFr}
                  onChange={(event) => updateForm('descriptionFr', event.target.value)}
                />
              </Field>
            </div>

            {imagePreviews.length > 0 && (
              <div className="mt-5 grid grid-cols-2 gap-4 border border-[#D8DEEA] p-4 sm:grid-cols-3">
                {imagePreviews.map((preview, idx) => (
                  <div key={idx} className="relative group">
                    <img src={preview} alt={`Preview ${idx + 1}`} className="h-32 w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => {
                        const newImages = [...form.images];
                        newImages.splice(idx, 1);
                        updateForm('images', newImages);
                      }}
                      className="absolute top-2 right-2 grid h-6 w-6 place-items-center bg-[#B93018] text-xs font-black text-white shadow-md opacity-0 transition hover:bg-[#0A1730] group-hover:opacity-100"
                      aria-label="Remove image"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}

            {message && <p className="mt-4 text-sm font-bold text-[#3156A4]">{message}</p>}

            <button
              type="submit"
              disabled={busy}
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 bg-[#E85D3F] px-5 text-sm font-black text-white transition hover:bg-[#0A1730] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <ImagePlus className="h-4 w-4" />
              Save project
            </button>
          </form>

          <aside className="border border-[#D8DEEA] bg-white p-5 shadow-xl shadow-[#0A1730]/8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-black">Saved projects</h2>
              <button type="button" onClick={() => loadProjects()} className="grid h-10 w-10 place-items-center border border-[#CAD5E4]">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-3">
              {projects.map((project) => (
                <article key={project.id ?? project.title} className="grid grid-cols-[5.5rem_1fr_auto] gap-3 border border-[#E3E7EF] p-2">
                  <img src={project.image} alt={project.title} className="h-20 w-full object-cover" />
                  <div>
                    <p className="text-[0.7rem] font-black uppercase tracking-[0.14em] text-[#3156A4]">{project.label}</p>
                    <h3 className="mt-1 text-sm font-black leading-tight">{project.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs font-semibold leading-5 text-[#526174]">{project.meta}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(project.id)}
                    className="grid h-9 w-9 place-items-center bg-[#F3EFE3] text-[#B93018] transition hover:bg-[#B93018] hover:text-white"
                    aria-label={`Delete ${project.title}`}
                    disabled={busy}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

