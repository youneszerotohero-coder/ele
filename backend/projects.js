import { ObjectId } from 'mongodb';
import { projectSeedData } from './projectSeedData.js';
import { getProjectsCollection } from './mongo.js';

function localizedValue(value, lang) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  return value[lang] ?? value.en ?? value.fr ?? Object.values(value)[0];
}

export function normalizeProject(project, lang = 'en') {
  const translation = project.translations?.[lang] ?? project[lang] ?? {};

  return {
    id: project._id?.toString?.() ?? project.id ?? project.slug ?? project.title,
    title: translation.title ?? localizedValue(project.title, lang),
    category: project.category,
    label: translation.label ?? localizedValue(project.label, lang) ?? project.category,
    meta: translation.meta ?? localizedValue(project.meta, lang) ?? '',
    description: translation.description ?? localizedValue(project.description, lang) ?? '',
    image: project.image ?? translation.image ?? '',
  };
}

export async function fetchMongoProjects(lang = 'en') {
  const collection = await getProjectsCollection();
  const docs = await collection.find({}).sort({ order: 1, _id: 1 }).toArray();

  return docs
    .map((project) => normalizeProject(project, lang))
    .filter((project) => project.title && project.category);
}

export function getFallbackProjects(lang = 'en') {
  return projectSeedData.map((project) => normalizeProject(project, lang));
}

export async function insertProject(project) {
  const collection = await getProjectsCollection();
  const lastProject = await collection.find({}).sort({ order: -1 }).limit(1).next();
  const order = Number.isFinite(lastProject?.order) ? lastProject.order + 1 : 1;
  const now = new Date();

  const result = await collection.insertOne({
    ...project,
    order,
    createdAt: now,
    updatedAt: now,
  });

  return {
    ...project,
    _id: result.insertedId,
    order,
  };
}

export async function deleteProject(id) {
  const collection = await getProjectsCollection();

  if (!ObjectId.isValid(id)) {
    return { deletedCount: 0 };
  }

  return collection.deleteOne({ _id: new ObjectId(id) });
}
