import project1 from '../../projects-images/project1.jpeg';
import project2 from '../../projects-images/project2.jpeg';
import project3 from '../../projects-images/project3.jpeg';
import project4 from '../../projects-images/project4.jpeg';
import project5 from '../../projects-images/project5.jpeg';

export const heroImage =
  'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1400&fit=crop';

export const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
];

const sharedStats = [
  { value: 20.1, suffix: 'M', accent: 'DZD' },
  { value: 30, suffix: 'kV', accent: 'MT' },
  { value: 25, suffix: '+', accent: '' },
  { value: 14, suffix: '+', accent: '' },
];

const projectImages = [project1, project2, project3, project4, project5];

export const siteContent = {
  fr: {
    dir: 'ltr',
    locale: 'fr-DZ',
    company: 'SALEG',
    header: {
      nav: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'Services', href: '#services' },
        { label: 'Réalisations', href: '#realisations' },
        { label: 'Clients', href: '#clients' },
      ],
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Sarl SALEG | Bab-Ezzouar, Alger',
      title: 'SALEG',
      subtitle: 'Montage électrique HT/MT/BT & groupes électrogènes',
      text:
        'Une équipe d’ingénieurs et de techniciens accompagne les projets industriels depuis les études, la planification et l’estimation jusqu’aux essais, la mise en service et la maintenance.',
      primary: 'Demander une offre',
      secondary: 'Voir les services',
      badges: ['HT/MT/BT', 'Postes électriques', 'Centrales PV', 'Grid Code'],
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une société algérienne dédiée aux installations électriques critiques.',
      paragraphs: [
        'SALEG est spécialisée dans l’ingénierie des systèmes électriques industriels, couvrant la Haute Tension, la Moyenne Tension et la Basse Tension.',
        'L’entreprise intervient sur les centrales de production, les postes HT/MT, l’intégration réseau, les systèmes de protection, les installations MT/BT et les groupes électrogènes.',
      ],
      highlights: [
        'Siège social à Bab-Ezzouar, Alger',
        'Capital social de 20 100 000 DZD',
        'Interface technique avec SONELGAZ / GRTE',
      ],
      cta: 'Notre expertise',
    },
    stats: {
      eyebrow: 'Chiffres clés',
      title: 'Des références terrain pour les projets industriels et publics.',
      items: [
        { ...sharedStats[0], label: 'Capital social' },
        { ...sharedStats[1], label: 'Réseaux électriques MT' },
        { ...sharedStats[2], label: 'Clients et partenaires cités' },
        { ...sharedStats[3], label: 'Réalisations majeures' },
      ],
    },
    services: {
      eyebrow: 'Domaines d’intervention',
      title: 'Services modulaires pour les besoins EPC, industriels et publics.',
      items: [
        {
          title: 'Ingénierie des systèmes électriques',
          description:
            'Études de flux de charge, court-circuit, protections, coordination, sélectivité et conformité Grid Code avec modélisation ETAP / DIgSILENT.',
          points: ['Flux de charge', 'Court-circuit', 'Grid Code'],
        },
        {
          title: 'Postes électriques HT/MT',
          description:
            'Assistance à la conception, configuration des relais de protection, essais fonctionnels, procédures de mise sous tension et synchronisation réseau.',
          points: ['Relais de protection', 'Essais secondaires', 'Mise en service'],
        },
        {
          title: 'Centrales photovoltaïques',
          description:
            'Mise en service de la partie DC, courbes I-V, inspection thermographique, intégration des onduleurs et validation des performances.',
          points: ['Tests DC', 'Onduleurs', 'Performance'],
        },
        {
          title: 'Installations MT/BT',
          description:
            'Réalisation de réseaux 30 kV, 10 kV et 5,5 kV, tableaux AC/DC, câblage, raccordement, mise à la terre, éclairage et services auxiliaires.',
          points: ['Tableaux BT', 'Câblage', 'Mise à la terre'],
        },
        {
          title: 'Groupes électrogènes & secours',
          description:
            'Fourniture, installation, location, maintenance, entretien et réparation de groupes électrogènes toutes puissances.',
          points: ['Installation', 'Location', 'Maintenance'],
        },
        {
          title: 'Protection, réglages & sélectivité',
          description:
            'Calculs de réglages relais, courbes TCC, analyse des courts-circuits, vérification de la sélectivité et optimisation des schémas de protection.',
          points: ['Réglages relais', 'Courbes TCC', 'Sélectivité'],
        },
      ],
    },
    portfolio: {
      eyebrow: 'Portefeuille projets',
      title: 'Réalisations sélectionnées',
      categories: [
        { id: 'all', label: 'Tous' },
        { id: 'substations', label: 'Postes HT/MT' },
        { id: 'public', label: 'Public' },
        { id: 'industry', label: 'Industrie' },
        { id: 'energy', label: 'Énergie' },
      ],
      projects: [
        {
          title: 'Postes transformateurs MT/BT',
          category: 'substations',
          label: 'Postes HT/MT',
          meta: '30 kV / 10 kV / 5,5 kV',
          description:
            'Études, fourniture, installation, vérification et maintenance des postes transformateurs et cellules MT.',
          image: projectImages[0],
        },
        {
          title: 'Université de Tipaza 4000 PP',
          category: 'public',
          label: 'Public',
          meta: 'DEP Tipaza',
          description:
            'Travaux électriques pour le programme universitaire de Tipaza, incluant équipements et installations de distribution.',
          image: projectImages[1],
        },
        {
          title: 'Raffinerie de Skikda',
          category: 'industry',
          label: 'Industrie',
          meta: 'SONATRACH',
          description:
            'Intervention sur installations électriques industrielles dans un environnement exigeant de production énergétique.',
          image: projectImages[2],
        },
        {
          title: 'Complexe sidérurgique de Bellara',
          category: 'industry',
          label: 'Industrie',
          meta: 'Jijel',
          description:
            'Contribution aux installations électriques du complexe de Bellara pour le consortium SINOSTEEL MECC & SEDRI.',
          image: projectImages[3],
        },
        {
          title: 'Port Djen Djen - alimentation 30 kV',
          category: 'energy',
          label: 'Énergie',
          meta: 'AQS Jijel',
          description:
            'Alimentation électrique en 30 kV pour une infrastructure portuaire et industrielle stratégique.',
          image: projectImages[4],
        },
      ],
    },
    clients: {
      eyebrow: 'Références',
      title: 'Des clients publics, industriels et énergétiques.',
      intro:
        'Le portefeuille SALEG couvre des maîtres d’ouvrage publics, institutions nationales, directions de distribution, groupes industriels et EPC internationaux.',
      groups: [
        {
          title: 'Institutions & administrations',
          names: ['Présidence de la République', 'MDN', 'DGSN', 'DEP Alger', 'DEP Tipaza'],
        },
        {
          title: 'Énergie & industrie',
          names: ['SONATRACH', 'AQS Jijel', 'SNTA SPA', 'COSIDER Construction', 'ENCC SPA'],
        },
        {
          title: 'EPC & partenaires',
          names: ['SAMSUNG Engineering', 'SOMAFE ABB', 'DURO FELGUERA', 'CSCEC', 'YENIGUN'],
        },
      ],
    },
    cta: {
      title: 'Un projet électrique à dimensionner, installer ou mettre en service ?',
      text:
        'SALEG est disponible pour étudier vos besoins, planifier les travaux et mener vos opérations jusqu’à leur terme.',
      button: 'Contacter SALEG',
    },
    footer: {
      tagline: 'Ingénierie, montage et mise en service électrique HT/MT/BT.',
      address: 'Coopérative Immobilière Essanaouber, 1200 Logements, Local N° 01, Bab-Ezzouar, Alger',
      phone: '+213 661 300 972',
      phoneAlt: '+213 662 163 223',
      landline: '020 20 14 69',
      emails: ['sarlsaleg@yahoo.fr', 'sarlsaleg@hotmail.fr'],
      columns: [
        { title: 'Services', links: ['Ingénierie électrique', 'Postes HT/MT', 'Installations MT/BT', 'Groupes électrogènes'] },
        { title: 'Expertise', links: ['Grid Code', 'Protection', 'Mise en service', 'Maintenance'] },
      ],
      city: 'Bab-Ezzouar, Alger',
      rights: 'Tous droits réservés.',
    },
  },
  ar: {
    dir: 'rtl',
    locale: 'ar-DZ',
    company: 'SALEG',
    header: {
      nav: [
        { label: 'الرئيسية', href: '#accueil' },
        { label: 'الخبرة', href: '#expertise' },
        { label: 'الخدمات', href: '#services' },
        { label: 'المشاريع', href: '#realisations' },
        { label: 'العملاء', href: '#clients' },
      ],
      contact: 'اتصل بنا',
    },
    hero: {
      eyebrow: 'ش.ذ.م.م SALEG | باب الزوار، الجزائر',
      title: 'SALEG',
      subtitle: 'تركيب كهربائي للجهد العالي والمتوسط والمنخفض ومولدات الطاقة',
      text:
        'يرافق فريق من المهندسين والتقنيين المشاريع الصناعية من الدراسات والتخطيط والتقدير إلى الاختبارات والتشغيل والصيانة.',
      primary: 'طلب عرض',
      secondary: 'عرض الخدمات',
      badges: ['HT/MT/BT', 'محطات كهربائية', 'محطات شمسية', 'Grid Code'],
    },
    about: {
      eyebrow: 'من نحن',
      title: 'شركة جزائرية متخصصة في المنشآت الكهربائية الحساسة.',
      paragraphs: [
        'تتخصص SALEG في هندسة الأنظمة الكهربائية الصناعية للجهد العالي والمتوسط والمنخفض.',
        'تعمل الشركة في محطات الإنتاج، محطات HT/MT، إدماج الشبكة، أنظمة الحماية، منشآت MT/BT ومولدات الطاقة.',
      ],
      highlights: [
        'المقر الاجتماعي في باب الزوار، الجزائر',
        'رأس مال اجتماعي قدره 20 100 000 دج',
        'تنسيق تقني مع SONELGAZ / GRTE',
      ],
      cta: 'خبرتنا',
    },
    stats: {
      eyebrow: 'أرقام رئيسية',
      title: 'خبرة ميدانية في المشاريع الصناعية والعمومية.',
      items: [
        { ...sharedStats[0], label: 'رأس المال الاجتماعي' },
        { ...sharedStats[1], label: 'شبكات كهربائية متوسطة الجهد' },
        { ...sharedStats[2], label: 'عملاء وشركاء مذكورون' },
        { ...sharedStats[3], label: 'إنجازات كبرى' },
      ],
    },
    services: {
      eyebrow: 'مجالات التدخل',
      title: 'خدمات مرنة لاحتياجات مشاريع EPC والصناعة والمؤسسات العمومية.',
      items: [
        {
          title: 'هندسة الأنظمة الكهربائية',
          description:
            'دراسات تدفق القدرة، القصر الكهربائي، الحماية، التنسيق، الانتقائية والتوافق مع Grid Code باستعمال ETAP / DIgSILENT.',
          points: ['تدفق القدرة', 'القصر الكهربائي', 'Grid Code'],
        },
        {
          title: 'محطات HT/MT الكهربائية',
          description:
            'مساعدة في التصميم، ضبط مرحلات الحماية، اختبارات وظيفية، إجراءات الوضع تحت التوتر والمزامنة مع الشبكة.',
          points: ['مرحلات الحماية', 'اختبارات ثانوية', 'تشغيل'],
        },
        {
          title: 'المحطات الكهروضوئية',
          description:
            'تشغيل الجزء DC، قياس منحنيات I-V، الفحص الحراري، إدماج العواكس والتحقق من الأداء.',
          points: ['اختبارات DC', 'العواكس', 'الأداء'],
        },
        {
          title: 'منشآت MT/BT',
          description:
            'إنجاز شبكات 30 كV و10 كV و5.5 كV، لوحات AC/DC، الكوابل، الربط، التأريض، الإنارة والخدمات المساعدة.',
          points: ['لوحات BT', 'كوابل', 'تأريض'],
        },
        {
          title: 'مولدات الطاقة والنجدة',
          description:
            'توفير وتركيب وكراء وصيانة وإصلاح مولدات الطاقة بمختلف القدرات.',
          points: ['تركيب', 'كراء', 'صيانة'],
        },
        {
          title: 'الحماية والضبط والانتقائية',
          description:
            'حسابات ضبط المرحلات، منحنيات TCC، تحليل القصر الكهربائي، التحقق من الانتقائية وتحسين مخططات الحماية.',
          points: ['ضبط المرحلات', 'منحنيات TCC', 'انتقائية'],
        },
      ],
    },
    portfolio: {
      eyebrow: 'محفظة المشاريع',
      title: 'إنجازات مختارة',
      categories: [
        { id: 'all', label: 'الكل' },
        { id: 'substations', label: 'محطات HT/MT' },
        { id: 'public', label: 'عمومي' },
        { id: 'industry', label: 'صناعة' },
        { id: 'energy', label: 'طاقة' },
      ],
      projects: [
        {
          title: 'محطات تحويل MT/BT',
          category: 'substations',
          label: 'محطات HT/MT',
          meta: '30 كV / 10 كV / 5.5 كV',
          description:
            'دراسات وتوريد وتركيب وفحص وصيانة محطات التحويل وخلايا الجهد المتوسط.',
          image: projectImages[0],
        },
        {
          title: 'جامعة تيبازة 4000 مقعد',
          category: 'public',
          label: 'عمومي',
          meta: 'DEP Tipaza',
          description:
            'أشغال كهربائية للبرنامج الجامعي بتيبازة تشمل تجهيزات ومنشآت التوزيع.',
          image: projectImages[1],
        },
        {
          title: 'مصفاة سكيكدة',
          category: 'industry',
          label: 'صناعة',
          meta: 'SONATRACH',
          description:
            'تدخل في منشآت كهربائية صناعية داخل بيئة إنتاج طاقوي عالية المتطلبات.',
          image: projectImages[2],
        },
        {
          title: 'مركب بلارة للحديد والصلب',
          category: 'industry',
          label: 'صناعة',
          meta: 'جيجل',
          description:
            'مساهمة في المنشآت الكهربائية لمركب بلارة لصالح تجمع SINOSTEEL MECC & SEDRI.',
          image: projectImages[3],
        },
        {
          title: 'ميناء جن جن - تغذية 30 كV',
          category: 'energy',
          label: 'طاقة',
          meta: 'AQS Jijel',
          description:
            'تغذية كهربائية بجهد 30 كV لمنشأة مينائية وصناعية استراتيجية.',
          image: projectImages[4],
        },
      ],
    },
    clients: {
      eyebrow: 'مراجع',
      title: 'عملاء من القطاع العمومي والصناعي والطاقوي.',
      intro:
        'تشمل محفظة SALEG مؤسسات عمومية، هيئات وطنية، مديريات توزيع، مجموعات صناعية وشركاء EPC دوليين.',
      groups: [
        {
          title: 'مؤسسات وإدارات',
          names: ['رئاسة الجمهورية', 'MDN', 'DGSN', 'DEP Alger', 'DEP Tipaza'],
        },
        {
          title: 'الطاقة والصناعة',
          names: ['SONATRACH', 'AQS Jijel', 'SNTA SPA', 'COSIDER Construction', 'ENCC SPA'],
        },
        {
          title: 'شركاء EPC',
          names: ['SAMSUNG Engineering', 'SOMAFE ABB', 'DURO FELGUERA', 'CSCEC', 'YENIGUN'],
        },
      ],
    },
    cta: {
      title: 'هل لديكم مشروع كهربائي يحتاج إلى دراسة أو تركيب أو تشغيل؟',
      text:
        'SALEG جاهزة لدراسة احتياجاتكم، تخطيط الأشغال ومرافقة العمليات إلى غاية التسليم.',
      button: 'اتصل بـ SALEG',
    },
    footer: {
      tagline: 'هندسة وتركيب وتشغيل كهربائي HT/MT/BT.',
      address: 'التعاونية العقارية السناوبر، 1200 مسكن، محل رقم 01، باب الزوار، الجزائر',
      phone: '+213 661 300 972',
      phoneAlt: '+213 662 163 223',
      landline: '020 20 14 69',
      emails: ['sarlsaleg@yahoo.fr', 'sarlsaleg@hotmail.fr'],
      columns: [
        { title: 'الخدمات', links: ['هندسة كهربائية', 'محطات HT/MT', 'منشآت MT/BT', 'مولدات الطاقة'] },
        { title: 'الخبرة', links: ['Grid Code', 'الحماية', 'التشغيل', 'الصيانة'] },
      ],
      city: 'باب الزوار، الجزائر',
      rights: 'كل الحقوق محفوظة.',
    },
  },
};
