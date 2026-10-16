// Tout le texte du site, en français et en anglais.
// Pour modifier une phrase, changez-la ici (dans "fr" ET dans "en").

export const EMAIL = 'celinebouriez@gmail.com'

const content = {
  fr: {
    meta: {
      title: 'Céline Bouriez | Consultante en affaires réglementaires — Pharmacien',
      description:
        "Pharmacien consultante en affaires réglementaires : stratégie, dossiers d'AMM, cycle de vie, DM et DIV, intérim de pharmacien responsable. 18 ans d'expérience industrielle, France, Europe, États-Unis, Asie.",
    },
    nav: {
      expertise: 'Expertise',
      clients: 'Pour qui',
      missions: 'Missions',
      career: 'Parcours',
      cta: 'Me contacter',
      langLabel: 'Langue',
    },
    hero: {
      eyebrow: 'Pharmacien · Consultante indépendante en affaires réglementaires',
      title: ['Mettre vos produits de santé', 'sur le marché, sans détour.'],
      lede:
        "De la stratégie réglementaire à l'obtention de l'AMM, puis tout au long du cycle de vie, j'accompagne laboratoires, biotechs, façonniers et fabricants de dispositifs médicaux avec des dossiers solides et des décisions claires.",
      credentials: ['Docteur en pharmacie', 'Internat — pharmacie industrielle', 'DESS Droit de la santé'],
      primary: 'Proposer une mission',
      secondary: 'Voir mon expertise',
      formats: 'Mission au forfait · Temps partagé · Intérim',
      portraitLabel: 'Céline Bouriez',
      portraitStat: "ans en affaires réglementaires",
    },
    figures: [
      { value: '18+', label: "années d'expérience en industrie" },
      { value: '9', label: 'laboratoires, industriels et autorité' },
      { value: '3', label: 'familles de produits : médicaments, DM, DIV' },
      { value: '4', label: 'zones : France, Europe, États-Unis, Asie' },
    ],
    domains: {
      eyebrow: 'Domaines couverts',
      title: ['Un chemin clair vers le marché,', 'pour chaque produit.'],
      intro:
        "Une expérience directe sur les médicaments chimiques et biologiques, les dispositifs médicaux et les diagnostics in vitro — du développement à l'autorisation de mise sur le marché.",
      items: [
        { img: 'medicine-tablets.jpg', alt: 'Comprimés et gélules', label: 'Médicaments & produits biologiques' },
        { img: 'pharmaceutical-research.jpg', alt: 'Développement de dispositifs médicaux', label: 'Dispositifs médicaux' },
        { img: 'healthcare-products.jpg', alt: 'Laboratoire de diagnostic', label: 'Diagnostics in vitro' },
      ],
    },
    expertise: {
      eyebrow: 'Expertise',
      title: ['Ce que je prends', 'en charge pour vous.'],
      intro:
        'Une intervention opérationnelle, directement sur vos dossiers, ou un regard expert pour sécuriser vos choix.',
      items: [
        {
          title: 'Stratégie réglementaire',
          text: "Choix de la procédure (nationale, reconnaissance mutuelle, décentralisée, centralisée), plan de développement réglementaire, anticipation des questions des autorités.",
        },
        {
          title: "Dossiers d'AMM",
          text: 'Rédaction, compilation et revue critique des dossiers au format CTD, préparation des réponses aux questions des agences jusqu’à la décision.',
        },
        {
          title: 'Cycle de vie des produits',
          text: "Variations, renouvellements, transferts d'AMM, mises à jour des annexes et des informations produit, maintien de la conformité.",
        },
        {
          title: 'Produits biologiques & de spécialité',
          text: 'Médicaments dérivés du plasma, produits biologiques, médicaments de spécialité : des dossiers aux exigences scientifiques élevées.',
        },
        {
          title: 'Dispositifs médicaux & DIV',
          text: 'Accompagnement réglementaire des dispositifs médicaux et des diagnostics in vitro, de la documentation technique au maintien sur le marché.',
        },
        {
          title: 'Pharmacien responsable & conformité',
          text: "Intérim de pharmacien responsable, audits de conformité réglementaire, interface avec l'ANSM et structuration de la fonction affaires réglementaires.",
        },
      ],
    },
    clients: {
      eyebrow: 'Pour qui',
      title: ['Des entreprises de toute taille,', 'un même niveau d’exigence.'],
      items: [
        {
          title: 'Laboratoires pharmaceutiques',
          text: "Renfort d'équipe pendant un pic d'activité, une absence ou un dépôt stratégique.",
        },
        {
          title: 'Biotechs & start-ups',
          text: "Une fonction affaires réglementaires complète, sans recruter : stratégie, premiers dossiers, interlocution avec les agences.",
        },
        {
          title: 'Façonniers & CDMO',
          text: 'Sections qualité et fabrication des dossiers, variations liées aux sites et aux procédés, support aux clients donneurs d’ordre.',
        },
        {
          title: 'Fabricants de DM & DIV',
          text: 'Documentation technique, mise en conformité et suivi réglementaire des dispositifs et réactifs de diagnostic.',
        },
        {
          title: 'Établissements pharmaceutiques',
          text: 'Intérim de pharmacien responsable pour assurer la continuité de vos obligations légales.',
        },
      ],
    },
    missions: {
      eyebrow: "Formats d'intervention",
      title: ['Une collaboration', 'adaptée à votre besoin.'],
      items: [
        {
          title: 'Mission au forfait',
          text: "Un livrable défini — un dossier d'AMM, une série de variations, une stratégie — un périmètre, un délai, un budget.",
          tag: 'Projet ponctuel',
        },
        {
          title: 'Temps partagé',
          text: 'Quelques jours par semaine ou par mois, intégrée à vos équipes, pour piloter la fonction réglementaire dans la durée.',
          tag: 'Sur la durée',
        },
        {
          title: 'Audit & diagnostic',
          text: 'Revue de dossiers ou de portefeuille, identification des écarts et plan d’action priorisé.',
          tag: 'Regard expert',
        },
        {
          title: 'Intérim',
          text: 'Remplacement de pharmacien responsable ou de responsable affaires réglementaires, opérationnelle immédiatement.',
          tag: 'Continuité',
        },
      ],
    },
    strengths: {
      eyebrow: 'Pourquoi travailler avec moi',
      title: ['Une double compétence,', 'scientifique et juridique.'],
      items: [
        {
          title: 'Les deux côtés du dossier',
          text: "Formée en industrie (Servier, Sanofi) et à l'ANSM : je sais comment un dossier est construit et comment il est évalué.",
        },
        {
          title: 'Science et droit',
          text: 'Docteur en pharmacie et diplômée en droit de la santé : des arguments réglementaires solides sur le fond comme sur la forme.',
        },
        {
          title: 'Responsabilité pharmaceutique',
          text: "Expérience de pharmacien responsable intérimaire : une compréhension concrète des enjeux de conformité et de responsabilité.",
        },
        {
          title: 'Opérationnelle rapidement',
          text: "18 ans dans des structures très variées : je m'intègre vite à vos équipes et à vos outils.",
        },
      ],
    },
    approach: {
      eyebrow: 'Méthode',
      title: ['Avancer', 'avec clarté.'],
      intro:
        'Chaque produit, chaque marché et chaque équipe a ses besoins propres. Je transforme la complexité réglementaire en décisions concrètes.',
      steps: [
        { title: 'Comprendre', text: 'Produit, objectifs, calendrier : un diagnostic partagé dès le premier échange.' },
        { title: 'Planifier', text: 'Une feuille de route réglementaire alignée sur les exigences, vos priorités et vos ressources.' },
        { title: 'Livrer', text: "Des dossiers robustes, suivis jusqu'à la décision des autorités." },
      ],
    },
    education: {
      eyebrow: 'Formation',
      title: ['Un socle scientifique', 'et juridique.'],
      items: [
        { title: 'Docteur en pharmacie', text: 'Une formation scientifique rigoureuse sur le médicament et les produits de santé.' },
        {
          title: 'Internat en pharmacie — pharmacie industrielle',
          text: "Formation hospitalo-universitaire spécialisée, avec stages chez Servier, Sanofi et à l'ANSM.",
        },
        { title: 'DESS Droit de la santé', text: 'Spécialisation juridique dans la réglementation du médicament et des produits de santé.' },
      ],
    },
    career: {
      eyebrow: 'Parcours',
      title: ['18 ans en affaires réglementaires,', 'côté industrie.'],
      intro:
        "De l'internat aux fonctions réglementaires seniors, sur les médicaments, les produits biologiques, les dispositifs médicaux et le diagnostic in vitro.",
      marketsLabel: 'Marchés couverts',
      markets: ['France', 'Europe', 'États-Unis', 'Asie'],
      residencyLabel: 'Internat en pharmacie industrielle',
      industryLabel: 'Industrie',
      residency: [
        { name: 'Laboratoires Servier', role: 'Stage d’internat — pharmacie industrielle' },
        { name: 'Sanofi', role: 'Stage d’internat — pharmacie industrielle' },
        { name: 'ANSM', role: 'Stage d’internat à l’Agence nationale de sécurité du médicament et des produits de santé' },
      ],
      industry: [
        { name: 'Macopharma', role: 'Pharmacien affaires réglementaires · CDD', duration: '6 mois' },
        { name: 'LFB', role: 'Pharmacien affaires réglementaires', duration: '3,5 ans' },
        { name: 'Delpharm', role: 'Chargée d’affaires réglementaires', duration: '18 mois' },
        { name: 'SERB', role: 'Pharmacien responsable intérimaire / Chargée d’affaires réglementaires senior', duration: '5 ans 9 mois' },
        { name: 'Genefit', role: 'Affaires réglementaires', duration: '1,5 an' },
        { name: 'Diagast', role: 'Affaires réglementaires — diagnostic in vitro', duration: '5,5 ans' },
      ],
    },
    contact: {
      eyebrow: 'Un projet, un besoin de renfort ?',
      title: ['Parlons de', 'votre mission.'],
      text: 'Décrivez-moi votre produit, vos objectifs et vos échéances : je vous réponds avec une première analyse et une proposition d’intervention.',
      button: 'Écrire à Céline',
      subject: 'Proposition de mission — affaires réglementaires',
      copy: "Copier l'adresse",
      copied: 'Adresse copiée',
    },
    footer: {
      tagline: 'Pharmacien · Consultante indépendante en affaires réglementaires',
      top: 'Haut de page ↑',
    },
  },

  en: {
    meta: {
      title: 'Céline Bouriez | Regulatory Affairs Consultant — PharmD',
      description:
        'PharmD regulatory affairs consultant: strategy, marketing authorisation dossiers, lifecycle management, medical devices and IVDs, interim Qualified/Responsible Pharmacist. 18 years in industry across France, Europe, the US and Asia.',
    },
    nav: {
      expertise: 'Expertise',
      clients: 'Who I help',
      missions: 'Engagements',
      career: 'Career',
      cta: 'Get in touch',
      langLabel: 'Language',
    },
    hero: {
      eyebrow: 'PharmD · Independent regulatory affairs consultant',
      title: ['Bringing your health products', 'to market, without detours.'],
      lede:
        'From regulatory strategy to marketing authorisation, and throughout the product lifecycle, I support pharmaceutical companies, biotechs, CDMOs and device manufacturers with robust dossiers and clear decisions.',
      credentials: ['Doctor of Pharmacy', 'Residency in Industrial Pharmacy', 'Postgraduate Diploma in Health Law'],
      primary: 'Propose an assignment',
      secondary: 'Explore my expertise',
      formats: 'Fixed-scope projects · Part-time · Interim',
      portraitLabel: 'Céline Bouriez',
      portraitStat: 'years in regulatory affairs',
    },
    figures: [
      { value: '18+', label: 'years of industry experience' },
      { value: '9', label: 'pharma companies, manufacturers and agency' },
      { value: '3', label: 'product families: medicines, devices, IVDs' },
      { value: '4', label: 'regions: France, Europe, US, Asia' },
    ],
    domains: {
      eyebrow: 'Product areas',
      title: ['A clear route to market', 'for every product.'],
      intro:
        'Hands-on experience with small-molecule and biological medicines, medical devices and in vitro diagnostics — from development to marketing authorisation.',
      items: [
        { img: 'medicine-tablets.jpg', alt: 'Tablets and capsules', label: 'Medicines & biologics' },
        { img: 'pharmaceutical-research.jpg', alt: 'Medical device development', label: 'Medical devices' },
        { img: 'healthcare-products.jpg', alt: 'Diagnostic laboratory', label: 'In vitro diagnostics' },
      ],
    },
    expertise: {
      eyebrow: 'Expertise',
      title: ['What I take', 'off your plate.'],
      intro: 'Hands-on work directly on your dossiers, or an expert review to secure your decisions.',
      items: [
        {
          title: 'Regulatory strategy',
          text: 'Choice of procedure (national, mutual recognition, decentralised, centralised), regulatory development planning, anticipating agency questions.',
        },
        {
          title: 'Marketing authorisation dossiers',
          text: 'Writing, compiling and critically reviewing CTD dossiers, and preparing responses to agency questions through to decision.',
        },
        {
          title: 'Lifecycle management',
          text: 'Variations, renewals, MA transfers, updates to annexes and product information, ongoing compliance.',
        },
        {
          title: 'Biologics & specialty products',
          text: 'Plasma-derived medicines, biologics and specialty medicines: dossiers with demanding scientific requirements.',
        },
        {
          title: 'Medical devices & IVDs',
          text: 'Regulatory support for medical devices and in vitro diagnostics, from technical documentation to post-market maintenance.',
        },
        {
          title: 'Responsible Pharmacist & compliance',
          text: 'Interim Responsible Pharmacist, regulatory compliance audits, liaison with the French agency (ANSM) and building the regulatory function.',
        },
      ],
    },
    clients: {
      eyebrow: 'Who I help',
      title: ['Companies of every size,', 'the same high standards.'],
      items: [
        { title: 'Pharmaceutical companies', text: 'Extra capacity during peak workload, an absence or a strategic submission.' },
        {
          title: 'Biotechs & start-ups',
          text: 'A complete regulatory function without a new hire: strategy, first dossiers, agency interactions.',
        },
        {
          title: 'CDMOs & contract manufacturers',
          text: 'Quality and manufacturing sections, site and process variations, support to your client companies.',
        },
        {
          title: 'Device & IVD manufacturers',
          text: 'Technical documentation, compliance upgrades and regulatory follow-up for devices and diagnostic reagents.',
        },
        {
          title: 'Pharmaceutical establishments',
          text: 'Interim Responsible Pharmacist to keep your legal obligations covered without interruption.',
        },
      ],
    },
    missions: {
      eyebrow: 'Ways of working',
      title: ['An engagement', 'shaped to your needs.'],
      items: [
        {
          title: 'Fixed-scope project',
          text: 'A defined deliverable — an MA dossier, a batch of variations, a strategy — with a clear scope, timeline and budget.',
          tag: 'One-off',
        },
        {
          title: 'Part-time',
          text: 'A few days a week or a month, embedded in your team, to run the regulatory function over time.',
          tag: 'Ongoing',
        },
        {
          title: 'Audit & gap analysis',
          text: 'Review of dossiers or a portfolio, identification of gaps and a prioritised action plan.',
          tag: 'Expert review',
        },
        {
          title: 'Interim',
          text: 'Cover for a Responsible Pharmacist or Head of Regulatory Affairs, effective from day one.',
          tag: 'Continuity',
        },
      ],
    },
    strengths: {
      eyebrow: 'Why work with me',
      title: ['A dual expertise,', 'scientific and legal.'],
      items: [
        {
          title: 'Both sides of the dossier',
          text: 'Trained in industry (Servier, Sanofi) and at the French medicines agency: I know how a dossier is built and how it is assessed.',
        },
        {
          title: 'Science and law',
          text: 'Doctor of Pharmacy with a postgraduate degree in health law: regulatory arguments that are sound in substance and in form.',
        },
        {
          title: 'Pharmaceutical accountability',
          text: 'Experience as interim Responsible Pharmacist: a practical grasp of compliance and liability.',
        },
        {
          title: 'Up to speed quickly',
          text: '18 years in very different organisations: I integrate fast with your teams and tools.',
        },
      ],
    },
    approach: {
      eyebrow: 'Approach',
      title: ['Move forward', 'with clarity.'],
      intro:
        'Every product, market and team has its own needs. I turn regulatory complexity into clear, practical decisions.',
      steps: [
        { title: 'Understand', text: 'Product, objectives and timeline: a shared assessment from the first conversation.' },
        { title: 'Plan', text: 'A regulatory roadmap aligned with requirements, priorities and available resources.' },
        { title: 'Deliver', text: 'Robust submissions, followed through to the authorities’ decision.' },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: ['A scientific and legal', 'foundation.'],
      items: [
        { title: 'Doctor of Pharmacy', text: 'A rigorous scientific foundation in medicines and healthcare products.' },
        {
          title: 'Hospital Residency — Industrial Pharmacy',
          text: 'Specialist university-hospital training, with placements at Servier, Sanofi and the French medicines agency, ANSM.',
        },
        { title: 'Postgraduate Diploma in Health Law (DESS)', text: 'Legal specialisation in the regulation of medicines and healthcare products.' },
      ],
    },
    career: {
      eyebrow: 'Career',
      title: ['18 years in regulatory affairs,', 'on the industry side.'],
      intro:
        'From specialist residency to senior regulatory roles, across medicines, biological products, medical devices and in vitro diagnostics.',
      marketsLabel: 'Markets supported',
      markets: ['France', 'Europe', 'United States', 'Asia'],
      residencyLabel: 'Industrial pharmacy residency',
      industryLabel: 'Industry',
      residency: [
        { name: 'Laboratoires Servier', role: 'Industrial pharmacy residency placement' },
        { name: 'Sanofi', role: 'Industrial pharmacy residency placement' },
        { name: 'ANSM', role: 'Residency placement at the French National Agency for Medicines and Health Products Safety' },
      ],
      industry: [
        { name: 'Macopharma', role: 'Regulatory Affairs Pharmacist · Fixed-term contract', duration: '6 months' },
        { name: 'LFB', role: 'Regulatory Affairs Pharmacist', duration: '3.5 years' },
        { name: 'Delpharm', role: 'Regulatory Affairs Associate', duration: '18 months' },
        { name: 'SERB', role: 'Interim Responsible Pharmacist / Senior Regulatory Affairs Associate', duration: '5 years 9 months' },
        { name: 'Genefit', role: 'Regulatory affairs', duration: '1.5 years' },
        { name: 'Diagast', role: 'Regulatory affairs — in vitro diagnostics', duration: '5.5 years' },
      ],
    },
    contact: {
      eyebrow: 'A project, or need extra capacity?',
      title: ['Let’s talk about', 'your assignment.'],
      text: 'Tell me about your product, objectives and deadlines: I will reply with an initial view and a proposed engagement.',
      button: 'Email Céline',
      subject: 'Assignment proposal — regulatory affairs',
      copy: 'Copy address',
      copied: 'Address copied',
    },
    footer: {
      tagline: 'PharmD · Independent regulatory affairs consultant',
      top: 'Back to top ↑',
    },
  },
}

export default content
