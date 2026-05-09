import project1 from '../../projects-images/project1.jpeg';
import project2 from '../../projects-images/project2.jpeg';
import project3 from '../../projects-images/project3.jpeg';
import project4 from '../../projects-images/project4.jpeg';
import project5 from '../../projects-images/project5.jpeg';

export const heroImage =
  'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1400&fit=crop';

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

const sharedStats = [
  { value: 20.1, suffix: 'M', accent: 'DZD' },
  { value: 30, suffix: 'kV', accent: 'MT' },
  { value: 25, suffix: '+', accent: '' },
  { value: 14, suffix: '+', accent: '' },
];

const projectImages = [project1, project2, project3, project4, project5];

export const siteContent = {
  en: {
    dir: 'ltr',
    locale: 'en-DZ',
    company: 'SALEG',
    header: {
      nav: [
        { label: 'Home', href: '#accueil' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#realisations' },
        { label: 'Clients', href: '#clients' },
      ],
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Sarl SALEG | Bab-Ezzouar, Algiers',
      title: 'SALEG',
      subtitle: 'Electrical assembly HT/MT/BT & generator sets',
      text:
        'Since 2004, SALEG has supported industrial, public and energy projects from studies, planning and estimation through testing, commissioning and maintenance.',
      primary: 'Request an offer',
      secondary: 'View services',
      badges: ['HT/MT/BT', 'Electrical substations', 'PV plants', 'Grid Code'],
    },
    about: {
      eyebrow: 'About SALEG',
      title: 'An Algerian electrical company serving critical installations since 2004.',
      paragraphs: [
        'SALEG Sarl is a company for electrical realization and assembly in medium and low voltage, with field experience across industrial, public and energy facilities.',
        'The company has built a broad client portfolio by delivering electrical studies, substations, network integration, protection systems, MT/BT installations and generator set services.',
        'The manager of the company is Salmi Mohamed Lotfi.',
      ],
      highlights: [
        'Established in 2004',
        'Managed by Salmi Mohamed Lotfi',
        'Many public, industrial and energy clients',
        'Head office in Bab-Ezzouar, Algiers',
      ],
      cta: 'Explore services',
      documentsLabel: 'Company documents',
      closeLabel: 'Close preview',
      documents: [
        {
          label: 'Show presentation',
          href: '/documents/saleg-pres.pdf',
          type: 'presentation',
          pageCount: 10,
          pagePath: '/documents/saleg-presentation-pages/saleg-presentation-page-',
        },
        {
          label: 'Show details',
          href: '/documents/saleg-details.pdf',
          type: 'details',
          pageCount: 27,
          pagePath: '/documents/saleg-details-pages/saleg-details-page-',
        },
      ],
    },
    stats: {
      eyebrow: 'Key figures',
      title: 'Field references for industrial and public electrical projects.',
      items: [
        { ...sharedStats[0], label: 'Share capital' },
        { ...sharedStats[1], label: 'Medium-voltage networks' },
        { ...sharedStats[2], label: 'Clients and partners cited' },
        { ...sharedStats[3], label: 'Major achievements' },
      ],
    },
    services: {
      eyebrow: 'Areas of work',
      title: 'Modular services for EPC, industrial and public-sector needs.',
      items: [
        {
          title: 'Electrical systems engineering',
          description:
            'Load-flow, short-circuit, protection, coordination, selectivity and Grid Code studies using ETAP / DIgSILENT modelling.',
          points: ['Load flow', 'Short circuit', 'Grid Code'],
        },
        {
          title: 'HT/MT electrical substations',
          description:
            'Design support, protection relay configuration, functional tests, energization procedures and grid synchronization.',
          points: ['Protection relays', 'Secondary tests', 'Commissioning'],
        },
        {
          title: 'Photovoltaic plants',
          description:
            'DC-side commissioning, I-V curves, thermographic inspection, inverter integration and performance validation.',
          points: ['DC tests', 'Inverters', 'Performance'],
        },
        {
          title: 'MT/BT installations',
          description:
            'Execution of 30 kV, 10 kV and 5.5 kV networks, AC/DC panels, cabling, connection, grounding, lighting and auxiliary services.',
          points: ['LV panels', 'Cabling', 'Grounding'],
        },
        {
          title: 'Generator sets & backup power',
          description:
            'Supply, installation, rental, maintenance, servicing and repair of generator sets across power ranges.',
          points: ['Installation', 'Rental', 'Maintenance'],
        },
        {
          title: 'Protection, settings & selectivity',
          description:
            'Relay-setting calculations, TCC curves, short-circuit analysis, selectivity checks and protection scheme optimization.',
          points: ['Relay settings', 'TCC curves', 'Selectivity'],
        },
      ],
    },
    portfolio: {
      eyebrow: 'Project portfolio',
      title: 'Selected achievements',
      categories: [
        { id: 'all', label: 'All' },
        { id: 'substations', label: 'HT/MT substations' },
        { id: 'public', label: 'Public' },
        { id: 'industry', label: 'Industry' },
        { id: 'energy', label: 'Energy' },
      ],
      projects: [
        {
          title: 'MT/BT transformer substations',
          category: 'substations',
          label: 'HT/MT substations',
          meta: '30 kV / 10 kV / 5.5 kV',
          description:
            'Studies, supply, installation, verification and maintenance of transformer substations and MV cells.',
          image: projectImages[0],
        },
        {
          title: 'University of Tipaza 4000 seats',
          category: 'public',
          label: 'Public',
          meta: 'DEP Tipaza',
          description:
            'Electrical works for the Tipaza university program, including distribution equipment and installations.',
          image: projectImages[1],
        },
        {
          title: 'Skikda refinery',
          category: 'industry',
          label: 'Industry',
          meta: 'SONATRACH',
          description:
            'Work on industrial electrical installations in a demanding energy-production environment.',
          image: projectImages[2],
        },
        {
          title: 'Bellara steel complex',
          category: 'industry',
          label: 'Industry',
          meta: 'Jijel',
          description:
            'Contribution to electrical installations at the Bellara complex for SINOSTEEL MECC & SEDRI.',
          image: projectImages[3],
        },
        {
          title: 'Djen Djen port - 30 kV supply',
          category: 'energy',
          label: 'Energy',
          meta: 'AQS Jijel',
          description:
            '30 kV electrical supply for a strategic port and industrial infrastructure.',
          image: projectImages[4],
        },
      ],
    },
    clients: {
      eyebrow: 'References',
      title: 'Public, industrial and energy clients.',
      intro:
        'SALEG works with public project owners, national institutions, distribution departments, industrial groups and international EPC partners.',
      groups: [
        {
          title: 'Institutions & administrations',
          names: ['Presidency of the Republic', 'MDN', 'DGSN', 'DEP Alger', 'DEP Tipaza'],
        },
        {
          title: 'Energy & industry',
          names: ['SONATRACH', 'SONELGAZ', 'AQS Jijel', 'SNTA SPA', 'COSIDER Construction', 'ENCC SPA'],
        },
        {
          title: 'EPC & partners',
          names: ['SAMSUNG Engineering', 'ABB', 'DURO FELGUERA', 'CSCEC', 'YENIGUN'],
        },
      ],
    },
    cta: {
      title: 'Do you have an electrical project to size, install or commission?',
      text:
        'SALEG can study your needs, plan the works and carry operations through to completion.',
      button: 'Contact SALEG',
    },
    footer: {
      tagline: 'Electrical engineering, assembly and commissioning for HT/MT/BT installations.',
      address: 'Coopérative Immobilière Essanaouber, 1200 Logements, Local N° 01, Bab-Ezzouar, Algiers',
      phone: '+213 661 300 972',
      phoneAlt: '+213 662 163 223',
      landline: '020 20 14 69',
      emails: ['sarlsaleg@yahoo.fr', 'sarlsaleg@hotmail.fr'],
      columns: [
        { title: 'Services', links: ['Electrical engineering', 'HT/MT substations', 'MT/BT installations', 'Generator sets'] },
        { title: 'Expertise', links: ['Grid Code', 'Protection', 'Commissioning', 'Maintenance'] },
      ],
      city: 'Bab-Ezzouar, Algiers',
      rights: 'All rights reserved.',
    },
  },
  fr: {
    dir: 'ltr',
    locale: 'fr-DZ',
    company: 'SALEG',
    header: {
      nav: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'À propos', href: '#about' },
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
        'Depuis 2004, une équipe d’ingénieurs et de techniciens accompagne les projets industriels depuis les études, la planification et l’estimation jusqu’aux essais, la mise en service et la maintenance.',
      primary: 'Demander une offre',
      secondary: 'Voir les services',
      badges: ['HT/MT/BT', 'Postes électriques', 'Centrales PV', 'Grid Code'],
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une société algérienne dédiée aux installations électriques critiques depuis 2004.',
      paragraphs: [
        'SALEG est spécialisée dans la réalisation et le montage électrique en Moyenne et Basse Tension, avec une expérience terrain sur des sites industriels, publics et énergétiques.',
        'Depuis sa création en 2004, l’entreprise a développé un large portefeuille clients à travers les études électriques, les postes HT/MT, l’intégration réseau, les systèmes de protection, les installations MT/BT et les groupes électrogènes.',
        'Le gérant de la société est Salmi Mohamed Lotfi.',
      ],
      highlights: [
        'Créée en 2004',
        'Gérant : Salmi Mohamed Lotfi',
        'Nombreux clients publics, industriels et énergétiques',
        'Siège social à Bab-Ezzouar, Alger',
      ],
      cta: 'Notre expertise',
      documentsLabel: 'Documents entreprise',
      closeLabel: 'Fermer l’aperçu',
      documents: [
        {
          label: 'Voir la présentation',
          href: '/documents/saleg-presentation.pdf',
          type: 'presentation',
          pageCount: 10,
          pagePath: '/documents/saleg-presentation-pages/saleg-presentation-page-',
        },
        {
          label: 'Voir les détails',
          href: '/documents/saleg-details.pdf',
          type: 'details',
          pageCount: 27,
          pagePath: '/documents/saleg-details-pages/saleg-details-page-',
        },
      ],
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
          names: ['SONATRACH', 'SONELGAZ', 'AQS Jijel', 'SNTA SPA', 'COSIDER Construction', 'ENCC SPA'],
        },
        {
          title: 'EPC & partenaires',
          names: ['SAMSUNG Engineering', 'ABB', 'DURO FELGUERA', 'CSCEC', 'YENIGUN'],
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
};
