// StaffUp Mockup — Mock data (Phase 2A)
// All names realistic Swiss hospitality. Some clients fictional (marked).
// Single global `window.STAFFUP_DATA`. No fetching — runs from file://.

window.STAFFUP_DATA = (function () {

  // ---------- Helper: stable avatar palette ----------
  const palette = ['#c42a4e', '#df98a6', '#4ec07a', '#e7b94a', '#7a8cd6', '#b76ad8', '#5cb8c4', '#d68a5c'];
  const colorFor = (id) => palette[id % palette.length];
  const initials = (prenom, nom) => (prenom[0] + nom[0]).toUpperCase();

  // ---------- Candidates (12) ----------
  // Adds: avatar color, initials, lat/lng (approx for the map), week availability (7 booleans), tags, referredBy
  const candidates = [
    {
      id: 247, prenom: "Marie", nom: "Dumont", role: "Chef de rang",
      roles: ["Chef de rang", "Maître d'hôtel", "Événementiel"],
      ville: "Prilly", canton: "VD", distanceLausanne: 8,
      experienceYears: 4, ecole: "EHL 2022", permis: "Suissesse",
      langues: ["FR", "EN"], skills: ["Gastronomie", "Sommellerie"],
      tags: ["EHL", "Gastronomie", "Anglais courant"],
      rating: 5, available: true, dispo: "Disponible sam–dim", dispoEn: "Available Sat–Sun",
      lastPlacement: "Carlton (5/5)", referredBy: null,
      photo: "assets/images/portrait-marie.jpg",
      lat: 220, lng: 280, // SVG coords for the stylized map
      week: [true, true, false, false, true, true, true],
      placements: [
        { date: "Mai 2026", client: "Orllati Group", mission: "Gala Lausanne", rating: 5 },
        { date: "Avr 2026", client: "Carlton Hotel", mission: "Service dîner", rating: 5 },
        { date: "Fév 2026", client: "Auberge du Raisin", mission: "Service", rating: 4 },
        { date: "Déc 2025", client: "Carlton Hotel", mission: "Réveillon", rating: 5 },
        { date: "Nov 2025", client: "FC Echallens", mission: "Événement", rating: 5 }
      ],
      notesAgent: "Client Carlton demande en priorité pour futurs galas"
    },
    {
      id: 183, prenom: "Antoine", nom: "Berger", role: "Chef de rang",
      roles: ["Chef de rang", "Sommelier"],
      ville: "Renens", canton: "VD", distanceLausanne: 12,
      experienceYears: 3, ecole: "Vatel", permis: "Suisse",
      langues: ["FR", "DE"], skills: ["Sommellerie", "Bilingue FR/DE"],
      tags: ["Sommelier certifié", "FR/DE"],
      rating: 5, available: true, dispo: "Disponible dès samedi matin", dispoEn: "Available from Saturday morning",
      lastPlacement: "Beau-Rivage (5/5)", referredBy: null,
      photo: "assets/images/portrait-antoine.jpg",
      lat: 215, lng: 275,
      week: [false, true, true, true, true, true, true],
      placements: [
        { date: "Mai 2026", client: "Hôtel Beau-Rivage", mission: "Service gala", rating: 5 },
        { date: "Mar 2026", client: "Carlton Hotel", mission: "Réception", rating: 5 },
        { date: "Jan 2026", client: "Orllati Group", mission: "Soirée corporate", rating: 4 }
      ],
      notesAgent: "Excellent pour clientèle germanophone — Wengen à proposer."
    },
    {
      id: 312, prenom: "Nadia", nom: "Vasseur", role: "Événementiel",
      roles: ["Événementiel", "Service"],
      ville: "Morges", canton: "VD", distanceLausanne: 18,
      experienceYears: 5, ecole: "EHL 2021", permis: "Suissesse",
      langues: ["FR", "EN"], skills: ["Galas", "Cocktails"],
      tags: ["EHL", "Galas", "Cocktails"],
      rating: 5, available: true, dispo: "Disponible tout le weekend", dispoEn: "Available all weekend",
      lastPlacement: "PKF Sport (5/5)", referredBy: null,
      photo: "assets/images/portrait-nadia.jpg",
      lat: 200, lng: 275,
      week: [true, true, true, true, true, true, true],
      placements: [
        { date: "Mai 2026", client: "PKF Sport", mission: "Événement", rating: 5 },
        { date: "Avr 2026", client: "Orllati Group", mission: "Gala", rating: 5 }
      ],
      notesAgent: ""
    },
    {
      id: 198, prenom: "Thomas", nom: "Müller", role: "Cuisinier",
      roles: ["Cuisinier", "Chef de partie"],
      ville: "Lausanne", canton: "VD", distanceLausanne: 0,
      experienceYears: 6, ecole: "Vatel", permis: "Suisse",
      langues: ["FR", "DE", "EN"], skills: ["Gastronomie", "Pâtisserie"],
      tags: ["Vatel", "Pâtisserie"],
      rating: 5, available: false, dispo: "Indisponible jusqu'au 25 mai", dispoEn: "Unavailable until May 25",
      lastPlacement: "Beau-Rivage (5/5)", referredBy: null,
      lat: 225, lng: 282,
      week: [false, false, false, false, false, false, false],
      placements: [
        { date: "Mai 2026", client: "Hôtel Beau-Rivage", mission: "Cuisine semaine", rating: 5 }
      ],
      notesAgent: "En mission longue jusqu'au 25 mai."
    },
    {
      id: 221, prenom: "Sara", nom: "Henriques", role: "Housekeeping",
      roles: ["Housekeeping", "Gouvernante"],
      ville: "Vevey", canton: "VD", distanceLausanne: 22,
      experienceYears: 7, ecole: null, permis: "C",
      langues: ["FR", "PT"], skills: ["Luxe", "Gestion équipe"],
      tags: ["Luxe", "Gouvernante"],
      rating: 4, available: true, dispo: "Disponible semaine du 20 mai", dispoEn: "Available week of May 20",
      lastPlacement: "Carlton (4/5)", referredBy: null,
      lat: 260, lng: 295,
      week: [false, false, false, true, true, true, true],
      placements: [
        { date: "Avr 2026", client: "Carlton Hotel", mission: "Housekeeping semaine", rating: 4 }
      ],
      notesAgent: "Préfère missions semaine, pas weekend."
    },
    {
      id: 156, prenom: "Lucas", nom: "Rey", role: "Barman",
      roles: ["Barman", "Mixologie"],
      ville: "Genève", canton: "GE", distanceLausanne: 64,
      experienceYears: 5, ecole: "EHL 2020", permis: "Suisse",
      langues: ["FR", "EN", "ES"], skills: ["Mixologie", "Vins"],
      tags: ["EHL", "Mixologie"],
      rating: 5, available: true, dispo: "Disponible weekends", dispoEn: "Available weekends",
      lastPlacement: "Beau-Rivage (5/5)", referredBy: 247,
      lat: 130, lng: 320,
      week: [false, false, false, false, true, true, false],
      placements: [
        { date: "Mai 2026", client: "Hôtel Beau-Rivage", mission: "Bar gala", rating: 5 }
      ],
      notesAgent: "Référé par Marie Dumont (#247)."
    },
    {
      id: 289, prenom: "Camille", nom: "Lefèvre", role: "Service",
      roles: ["Service", "Accueil"],
      ville: "Nyon", canton: "VD", distanceLausanne: 28,
      experienceYears: 2, ecole: null, permis: "Suissesse",
      langues: ["FR", "EN"], skills: ["Service", "Banquet"],
      tags: ["Banquet"],
      rating: 4, available: true, dispo: "Disponible immédiatement", dispoEn: "Available immediately",
      lastPlacement: "FC Echallens (4/5)", referredBy: null,
      lat: 175, lng: 305,
      week: [true, true, true, true, true, true, true],
      placements: [
        { date: "Avr 2026", client: "FC Echallens", mission: "Service événement", rating: 4 }
      ],
      notesAgent: ""
    },
    {
      id: 301, prenom: "João", nom: "Pereira", role: "Cuisinier",
      roles: ["Cuisinier"],
      ville: "Lausanne", canton: "VD", distanceLausanne: 0,
      experienceYears: 4, ecole: null, permis: "B",
      langues: ["FR", "PT"], skills: ["Cuisine italienne", "Pasta"],
      tags: ["Italien", "Pasta"],
      rating: 4, available: true, dispo: "Disponible soirs et weekends", dispoEn: "Available evenings & weekends",
      lastPlacement: "Auberge du Raisin (4/5)", referredBy: null,
      lat: 228, lng: 285,
      week: [false, false, true, true, true, true, true],
      placements: [
        { date: "Mar 2026", client: "Auberge du Raisin", mission: "Cuisine weekend", rating: 4 }
      ],
      notesAgent: ""
    },
    {
      id: 274, prenom: "Léa", nom: "Bonnard", role: "Chef de rang",
      roles: ["Chef de rang", "Service"],
      ville: "Cully", canton: "VD", distanceLausanne: 14,
      experienceYears: 3, ecole: "EHL 2023", permis: "Suissesse",
      langues: ["FR", "EN", "IT"], skills: ["Gastronomie", "Vins du Lavaux"],
      tags: ["EHL", "Lavaux"],
      rating: 5, available: true, dispo: "Disponible cette semaine", dispoEn: "Available this week",
      lastPlacement: "Auberge du Raisin (5/5)", referredBy: null,
      lat: 245, lng: 290,
      week: [true, true, true, true, true, false, false],
      placements: [
        { date: "Mai 2026", client: "Auberge du Raisin", mission: "Service CDD", rating: 5 }
      ],
      notesAgent: "Profil maison pour l'Auberge du Raisin."
    },
    {
      id: 142, prenom: "Stefan", nom: "Brunner", role: "Réception",
      roles: ["Réception", "Conciergerie"],
      ville: "Wengen", canton: "BE", distanceLausanne: 180,
      experienceYears: 8, ecole: "HES-SO", permis: "Suisse",
      langues: ["DE", "FR", "EN"], skills: ["Luxe montagne", "Conciergerie"],
      tags: ["Luxe montagne", "Trilingue"],
      rating: 5, available: true, dispo: "Saison été disponible", dispoEn: "Available summer season",
      lastPlacement: "Belvédère Wengen (5/5)", referredBy: null,
      lat: 405, lng: 280,
      week: [true, true, true, true, true, true, true],
      placements: [
        { date: "Avr 2026", client: "Hôtel Belvédère Wengen", mission: "Réception", rating: 5 }
      ],
      notesAgent: "Disponible saison entière été 2026."
    },
    {
      id: 268, prenom: "Aïcha", nom: "Mendes", role: "Service",
      roles: ["Service", "Événementiel"],
      ville: "Lausanne", canton: "VD", distanceLausanne: 0,
      experienceYears: 2, ecole: null, permis: "B",
      langues: ["FR", "EN", "AR"], skills: ["Banquet", "Mariages"],
      tags: ["Mariages", "Banquet"],
      rating: 4, available: true, dispo: "Disponible weekends et soirs", dispoEn: "Available weekends & evenings",
      lastPlacement: "Carlton (4/5)", referredBy: null,
      lat: 224, lng: 281,
      week: [false, false, false, true, true, true, true],
      placements: [
        { date: "Avr 2026", client: "Carlton Hotel", mission: "Banquet", rating: 4 }
      ],
      notesAgent: ""
    },
    {
      id: 305, prenom: "Romain", nom: "Gerber", role: "Cuisinier",
      roles: ["Cuisinier", "Chef de partie"],
      ville: "Montreux", canton: "VD", distanceLausanne: 32,
      experienceYears: 6, ecole: "Vatel", permis: "Suisse",
      langues: ["FR", "EN"], skills: ["Cuisine française", "Étoilé"],
      tags: ["Vatel", "Étoilé"],
      rating: 5, available: false, dispo: "En mission jusqu'au 22 mai", dispoEn: "On assignment until May 22",
      lastPlacement: "Belvédère Wengen (5/5)", referredBy: null,
      lat: 270, lng: 300,
      week: [false, false, false, false, false, false, false],
      placements: [
        { date: "Mai 2026", client: "Hôtel Belvédère Wengen", mission: "Cuisine semaine", rating: 5 }
      ],
      notesAgent: "Profil rare — à mobiliser pour gastronomie."
    }
  ];

  // Attach avatar derivatives
  candidates.forEach(c => {
    c.avatarColor = colorFor(c.id);
    c.initials = initials(c.prenom, c.nom);
    c.fullName = c.prenom + ' ' + c.nom;
  });

  // ---------- Clients (8, expanded with contacts + history + notes) ----------
  const clients = [
    {
      id: 12, name: "Auberge du Raisin", sector: "Restaurant gastronomique",
      city: "Cully (VD)", contact: "Mme Charrière",
      contacts: [
        { name: "Mme Charrière", role: "Directrice", phone: "+41 21 ••• 12 34", email: "direction@auberge-raisin.ch" },
        { name: "M. Jaccoud", role: "Chef de cuisine", phone: "+41 79 ••• 45 67", email: "" }
      ],
      missionsCount: 8, revenue: 14200, lastMission: "73 jours", lastMissionEn: "73 days", status: "dormant",
      missions: [
        { date: "Mar 2026", role: "Chef de rang", candidate: "Léa Bonnard", fee: 1200, rating: 5 },
        { date: "Fév 2026", role: "Service", candidate: "Marie Dumont", fee: 950, rating: 4 },
        { date: "Déc 2025", role: "Cuisine", candidate: "João Pereira", fee: 1400, rating: 4 },
        { date: "Nov 2025", role: "Service gala", candidate: "Nadia Vasseur", fee: 1100, rating: 5 }
      ],
      agentNote: "Cliente très loyale, préfère contact direct par WhatsApp. 73 jours sans commande — relance recommandée."
    },
    {
      id: 18, name: "Carlton Boutique Hotel", sector: "Hôtel de luxe",
      city: "Lausanne (VD)", contact: "Sara Mateus, Directrice",
      contacts: [
        { name: "Sara Mateus", role: "Directrice générale", phone: "+41 21 ••• 78 00", email: "s.mateus@carlton-lausanne.ch" },
        { name: "M. Vogel", role: "Chef de réception", phone: "+41 21 ••• 78 12", email: "" },
        { name: "Mme Deschamps", role: "F&B Manager", phone: "+41 79 ••• 89 23", email: "" }
      ],
      missionsCount: 14, revenue: 28400, lastMission: "12 jours", lastMissionEn: "12 days", status: "actif",
      missions: [
        { date: "Mai 2026", role: "Service gala", candidate: "Marie Dumont", fee: 1400, rating: 5 },
        { date: "Avr 2026", role: "Service dîner", candidate: "Marie Dumont", fee: 1200, rating: 5 },
        { date: "Avr 2026", role: "Réception", candidate: "Antoine Berger", fee: 1100, rating: 5 },
        { date: "Mar 2026", role: "Banquet", candidate: "Aïcha Mendes", fee: 950, rating: 4 },
        { date: "Déc 2025", role: "Réveillon", candidate: "Marie Dumont", fee: 1800, rating: 5 }
      ],
      agentNote: "Sara Mateus demande Marie Dumont en priorité pour les galas. Client signature, à choyer."
    },
    {
      id: 23, name: "Orllati Group", sector: "Événementiel construction",
      city: "Vaud", contact: "M. Orllati",
      contacts: [
        { name: "M. Orllati", role: "Directeur", phone: "+41 79 ••• 34 56", email: "contact@orllati.ch" },
        { name: "Mme Repond", role: "Resp. événements", phone: "+41 79 ••• 34 78", email: "" }
      ],
      missionsCount: 6, revenue: 11600, lastMission: "5 jours",  lastMissionEn: "5 days", status: "actif",
      missions: [
        { date: "Mai 2026", role: "Buffet", candidate: "Marie Dumont", fee: 1300, rating: 5 },
        { date: "Avr 2026", role: "Gala", candidate: "Nadia Vasseur", fee: 1800, rating: 5 },
        { date: "Jan 2026", role: "Soirée corporate", candidate: "Antoine Berger", fee: 1100, rating: 4 }
      ],
      agentNote: "Profils événementiel — Nadia est leur favorite."
    },
    {
      id: 31, name: "Hôtel Beau-Rivage", sector: "Hôtel de luxe",
      city: "Genève", contact: "M. Berthier",
      contacts: [
        { name: "M. Berthier", role: "Directeur F&B", phone: "+41 22 ••• 45 67", email: "f.berthier@beaurivage.ch" }
      ],
      missionsCount: 4, revenue: 9800, lastMission: "21 jours", lastMissionEn: "21 days", status: "actif",
      missions: [
        { date: "Mai 2026", role: "Cuisine semaine", candidate: "Thomas Müller", fee: 2400, rating: 5 },
        { date: "Mai 2026", role: "Bar gala", candidate: "Lucas Rey", fee: 1100, rating: 5 },
        { date: "Avr 2026", role: "Service gala", candidate: "Antoine Berger", fee: 1200, rating: 5 }
      ],
      agentNote: "Vient d'annoncer un événement caritatif 18 juin — opportunité repérée par l'agent Veille."
    },
    {
      id: 47, name: "FC Echallens", sector: "Événementiel sportif",
      city: "Echallens (VD)", contact: "Mme Roulin",
      contacts: [
        { name: "Mme Roulin", role: "Responsable événements", phone: "+41 21 ••• 56 78", email: "evenements@fcechallens.ch" }
      ],
      missionsCount: 3, revenue: 4200, lastMission: "45 jours", lastMissionEn: "45 days", status: "tiède",
      missions: [
        { date: "Avr 2026", role: "Service événement", candidate: "Camille Lefèvre", fee: 950, rating: 4 },
        { date: "Mar 2026", role: "Service buvette", candidate: "Marie Dumont", fee: 800, rating: 5 }
      ],
      agentNote: "Saisonnier — pics sur les matchs à domicile. Replancer en juin pour la saison été."
    },
    {
      // fictional — placeholder for real Wengen client whose name we don't have
      id: 52, name: "Hôtel Belvédère Wengen", sector: "Hôtel de montagne",
      city: "Wengen (BE)", contact: "Herr Eggimann",
      contacts: [
        { name: "Herr Eggimann", role: "Direction", phone: "+41 33 ••• 67 89", email: "direction@belvedere-wengen.ch" }
      ],
      missionsCount: 1, revenue: 2800, lastMission: "8 jours",  lastMissionEn: "8 days", status: "nouveau",
      missions: [
        { date: "Mai 2026", role: "Réception", candidate: "Stefan Brunner", fee: 1400, rating: 5 },
        { date: "Mai 2026", role: "Cuisine semaine", candidate: "Romain Gerber", fee: 1400, rating: 5 }
      ],
      agentNote: "Premier client suisse alémanique. À développer — saison été demande forte sur réception et cuisine."
    },
    {
      id: 58, name: "PKF Sport", sector: "Événementiel",
      city: "Genève", contact: "M. Favre",
      contacts: [
        { name: "M. Favre", role: "Producteur événements", phone: "+41 22 ••• 78 90", email: "favre@pkfsport.ch" }
      ],
      missionsCount: 2, revenue: 3600, lastMission: "60 jours", lastMissionEn: "60 days", status: "tiède",
      missions: [
        { date: "Mar 2026", role: "Événement", candidate: "Nadia Vasseur", fee: 1800, rating: 5 }
      ],
      agentNote: "Genève — pics été sur événements sportifs internationaux."
    },
    {
      id: 64, name: "BuildCo SARL", sector: "Événementiel corporate",
      city: "Vaud", contact: "Mme Wenger",
      contacts: [
        { name: "Mme Wenger", role: "Office Manager", phone: "+41 21 ••• 89 01", email: "office@buildco.ch" }
      ],
      missionsCount: 2, revenue: 4800, lastMission: "32 jours", lastMissionEn: "32 days", status: "actif",
      missions: [
        { date: "Avr 2026", role: "Soirée annuelle", candidate: "Nadia Vasseur", fee: 2400, rating: 5 }
      ],
      agentNote: "Facture #189 en retard de 32 jours — rappel envoyé."
    },
    {
      id: 71, name: "Hôtel du Lac", sector: "Hôtel-restaurant lacustre",
      city: "Lutry (VD)", contact: "M. Delacroix",
      contacts: [
        { name: "M. Delacroix", role: "Directeur", phone: "+41 21 ••• 11 22", email: "direction@hoteldulac.ch" },
        { name: "Mme Schmidt", role: "Cheffe de réception", phone: "+41 21 ••• 11 28", email: "" }
      ],
      missionsCount: 3, revenue: 5400, lastMission: "3 jours",  lastMissionEn: "3 days", status: "actif",
      missions: [
        { date: "Mar 2026", role: "Service week-end", candidate: "Antoine Berger", fee: 1100, rating: 5 },
        { date: "Fév 2026", role: "Cuisine événement", candidate: "Thomas Müller", fee: 1800, rating: 5 },
        { date: "Déc 2025", role: "Réveillon", candidate: "Marie Dumont", fee: 2500, rating: 5 }
      ],
      agentNote: "Premier appel matin tôt. Brief urgent pour samedi — chef de cuisine à proposer en priorité."
    }
  ];

  // ---------- Missions / Requests (12) ----------
  const missions = [
    {
      id: 88, clientId: 71, client: "Hôtel du Lac", role: "Chef de cuisine",
      date: "Samedi 17 mai", urgency: "Urgent", status: "attente",
      brief: "Remplacement chef de cuisine, service du soir, équipe de 2 commis. Profil gastronomique exigé.",
      proposed: [], confirmed: null, note: "En attente de match", fee: 0
    },
    {
      id: 89, clientId: 18, client: "Carlton Boutique Hotel", role: "Service gala",
      date: "Dimanche 18 mai", urgency: "Normal", status: "proposes",
      brief: "Service gala 80 couverts, équipe de 4. Souhait : Marie Dumont en chef de rang.",
      proposed: [247, 183, 274], confirmed: null, note: "3 candidats proposés", fee: 1400
    },
    {
      id: 90, clientId: 23, client: "Orllati Group", role: "Buffet",
      date: "Vendredi 16 mai", urgency: "Normal", status: "confirme",
      brief: "Buffet déjeuner corporate, 60 personnes.",
      proposed: [247], confirmed: 247, note: "Marie Dumont confirmée", fee: 1300
    },
    {
      id: 91, clientId: null, client: "Dîner de Gala (Genève)", role: "Service événement — 15 postes",
      date: "22 mai · 15h–1h", urgency: "Urgent", status: "proposes",
      brief: "Gala 400 couverts. Recherche 15 profils service événementiel disponibles 15h–1h.",
      proposed: [312, 289, 268, 156, 274, 247, 183, 268], confirmed: null, note: "8 candidats confirmés / 15", fee: 0
    },
    {
      id: 92, clientId: 12, client: "Auberge du Raisin", role: "Chef de rang",
      date: "CDD — démarrage immédiat", urgency: "Normal", status: "confirme",
      brief: "CDD chef de rang, démarrage immédiat, profil gastronomique Lavaux.",
      proposed: [274, 247], confirmed: 274, note: "Léa Bonnard signée", fee: 1500
    },
    {
      id: 93, clientId: 52, client: "Hôtel Belvédère Wengen", role: "Réception saisonnière",
      date: "1 juin → 30 sept", urgency: "Normal", status: "proposes",
      brief: "Réception saison été. Trilingue DE/FR/EN requis. Logement sur place.",
      proposed: [142], confirmed: null, note: "Stefan Brunner pré-sélectionné", fee: 2800
    },
    {
      id: 94, clientId: 18, client: "Carlton Boutique Hotel", role: "Cuisinier(ère) CDI",
      date: "5j/7 · démarrage 1 juin", urgency: "Urgent", status: "attente",
      brief: "CDI cuisinier(ère). Brigade gastronomique. Démarrage 1 juin, période d'essai 3 mois.",
      proposed: [], confirmed: null, note: "Recherche active", fee: 0
    },
    {
      id: 95, clientId: 47, client: "FC Echallens", role: "Service événement",
      date: "Samedi 24 mai", urgency: "Normal", status: "attente",
      brief: "Match à domicile, service buvette, 3 personnes.",
      proposed: [], confirmed: null, note: "À matcher", fee: 0
    },
    {
      id: 96, clientId: 31, client: "Hôtel Beau-Rivage", role: "Service événement caritatif",
      date: "18 juin · soir", urgency: "Normal", status: "attente",
      brief: "Événement caritatif 180 couverts. Souhait : profils événementiel chevronnés.",
      proposed: [], confirmed: null, note: "Opportunité repérée par Agent Veille", fee: 0
    },
    {
      id: 87, clientId: 12, client: "Auberge du Raisin", role: "Service week-end",
      date: "Avr 2026", urgency: "Normal", status: "termine",
      brief: "Service week-end terminé.",
      proposed: [274, 247], confirmed: 274, note: "Mission clôturée — 5/5", fee: 1200
    },
    {
      id: 86, clientId: 31, client: "Hôtel Beau-Rivage", role: "Bar gala",
      date: "Mai 2026", urgency: "Normal", status: "termine",
      brief: "Bar gala 200 couverts.",
      proposed: [156], confirmed: 156, note: "Lucas Rey — 5/5", fee: 1100
    },
    {
      id: 85, clientId: 64, client: "BuildCo SARL", role: "Soirée annuelle",
      date: "Avr 2026", urgency: "Normal", status: "termine",
      brief: "Soirée annuelle 120 couverts.",
      proposed: [312], confirmed: 312, note: "Nadia Vasseur — 5/5 · facture #189 en retard", fee: 2400
    }
  ];

  // ---------- Invoices (14) ----------
  const invoices = [
    { id: 201, client: "Auberge du Raisin", matchId: 87, amount: 1200, dateSent: "13 mai 2026", datePaid: "14 mai 2026", status: "paid" },
    { id: 200, client: "Carlton Boutique Hotel", matchId: 89, amount: 2400, dateSent: "10 mai 2026", datePaid: "11 mai 2026", status: "paid" },
    { id: 199, client: "Orllati Group", matchId: 90, amount: 1800, dateSent: "8 mai 2026", datePaid: null, status: "pending" },
    { id: 198, client: "FC Echallens", matchId: 95, amount: 950, dateSent: "1 mai 2026", datePaid: null, status: "pending" },
    { id: 197, client: "Hôtel Beau-Rivage", matchId: 86, amount: 1650, dateSent: "28 avril 2026", datePaid: "30 avril 2026", status: "paid" },
    { id: 196, client: "Carlton Boutique Hotel", matchId: null, amount: 1200, dateSent: "25 avril 2026", datePaid: "27 avril 2026", status: "paid" },
    { id: 195, client: "Auberge du Raisin", matchId: null, amount: 950, dateSent: "20 avril 2026", datePaid: "22 avril 2026", status: "paid" },
    { id: 194, client: "Carlton Boutique Hotel", matchId: null, amount: 1800, dateSent: "15 avril 2026", datePaid: "16 avril 2026", status: "paid" },
    { id: 193, client: "PKF Sport", matchId: null, amount: 1800, dateSent: "12 avril 2026", datePaid: null, status: "pending" },
    { id: 192, client: "Orllati Group", matchId: null, amount: 1100, dateSent: "10 avril 2026", datePaid: "12 avril 2026", status: "paid" },
    { id: 189, client: "BuildCo SARL", matchId: 85, amount: 2400, dateSent: "10 avril 2026", datePaid: null, status: "overdue", daysOverdue: 32, reminders: ["Rappel cordial — 17 avr", "Rappel ferme — 24 avr", "Rappel final — 1 mai"] },
    { id: 188, client: "Hôtel Belvédère Wengen", matchId: 93, amount: 2800, dateSent: "5 avril 2026", datePaid: "7 avril 2026", status: "paid" },
    { id: 187, client: "FC Echallens", matchId: null, amount: 800, dateSent: "1 avril 2026", datePaid: "3 avril 2026", status: "paid" },
    { id: 186, client: "Carlton Boutique Hotel", matchId: null, amount: 950, dateSent: "28 mars 2026", datePaid: "30 mars 2026", status: "paid" }
  ];

  // ---------- Revenue / KPI numbers ----------
  const revenueMonth = {
    label: "Mai 2026 (en cours)",
    facture: 8400,
    encaisse: 5200,
    enAttente: 3,
    enAttenteCHF: 3200
  };

  const chartData = [
    // 6 last months: facturé / encaissé
    { month: "Déc", facture: 7400, encaisse: 7400 },
    { month: "Jan", facture: 6800, encaisse: 6800 },
    { month: "Fév", facture: 9200, encaisse: 9200 },
    { month: "Mar", facture: 8100, encaisse: 8100 },
    { month: "Avr", facture: 9650, encaisse: 7250 },
    { month: "Mai", facture: 8400, encaisse: 5200 }
  ];

  // ---------- Proactive suggestions ----------
  const proactive = [
    { id: 1, text: "Marie Dumont (profil #247) est disponible la semaine prochaine. Elle correspond à la demande en attente de l'Hôtel du Lac.", cta: "Voulez-vous que je la propose ?" },
    { id: 2, text: "Facture #189 (BuildCo SARL, CHF 2'400) est impayée depuis 32 jours.", cta: "Envoyer un rappel ferme ?" },
    { id: 3, text: "Un groupe de profils cuisine n'ont pas été placés depuis 60+ jours.", cta: "Lancer une campagne de réactivation ?" },
    { id: 4, text: "L'Auberge du Raisin n'a pas commandé depuis 73 jours. Quatre missions précédentes, toutes notées 5/5.", cta: "Envoyer un message de reprise ?" }
  ];

  // ---------- Autonomous agents (6) + management config ----------
  const agents = [
    {
      id: "instagram", name: "Agent Acquisition Instagram", active: true,
      description: "Surveille Instagram pour identifier de nouveaux profils hospitality dans votre zone, et rédige des messages d'approche.",
      frequency: "Toutes les 6 heures",
      scope: { regions: ["VD", "GE", "VS", "BE"], roles: ["Chef de rang", "Cuisinier", "Service"] },
      sensitivity: 70,
      lastRun: "il y a 2 h",
      runsThisMonth: 124,
      generated: 14, approved: 9, ignored: 5,
      activity: [
        { when: "il y a 2 h", text: "@mariesophie_chef — postage gastronomique Lausanne, 1.2k followers, EHL mention. Brouillon prêt." },
        { when: "hier", text: "@thomas.cuisine — Vatel diplômé, profil Lausanne. Brouillon prêt." },
        { when: "il y a 3 j", text: "@nadiacocktail — barman Genève, formations PR. Brouillon prêt." }
      ]
    },
    {
      id: "ehl", name: "Agent EHL Pipeline", active: true,
      description: "Surveille les événements carrière et annonces de promotions des écoles hôtelières (EHL, Vatel, HES-SO).",
      frequency: "Quotidien (9h)",
      scope: { regions: ["VD", "GE", "Toutes"], roles: ["Tous"] },
      sensitivity: 80,
      lastRun: "hier 09:00",
      runsThisMonth: 31,
      generated: 7, approved: 6, ignored: 1,
      activity: [
        { when: "hier", text: "3 nouveaux profils ajoutés depuis l'événement carrière EHL du 9 mai." },
        { when: "il y a 5 j", text: "1 profil Vatel ajouté — référence solide." }
      ]
    },
    {
      id: "reactivation", name: "Agent Réactivation", active: true,
      description: "Détecte les profils dormants et envoie des relances pour rafraîchir leur disponibilité.",
      frequency: "Mensuel",
      scope: { regions: ["Tous"], roles: ["Tous"] },
      sensitivity: 60,
      lastRun: "il y a 4 j",
      runsThisMonth: 1,
      generated: 47, approved: 47, ignored: 0,
      activity: [
        { when: "il y a 4 j", text: "Relance envoyée à 47 profils dormants — 12 confirmations reçues." }
      ]
    },
    {
      id: "veille", name: "Agent Veille Clients", active: true,
      description: "Surveille la presse, les annonces d'événements, les ouvertures de restaurants — détecte des opportunités commerciales.",
      frequency: "Toutes les 4 heures",
      scope: { regions: ["VD", "GE", "VS", "BE"], roles: ["—"] },
      sensitivity: 65,
      lastRun: "il y a 6 h",
      runsThisMonth: 168,
      generated: 9, approved: 6, ignored: 3,
      activity: [
        { when: "il y a 6 h", text: "Hôtel Beau-Rivage — événement caritatif 18 juin annoncé." },
        { when: "il y a 3 h", text: "Nouveau restaurant gastronomique annoncé à Vevey, ouverture septembre." }
      ]
    },
    {
      id: "referral", name: "Agent Référencement", active: true,
      description: "Gère le programme de parrainage : suit qui a référé qui, déclenche les remerciements, propose les meilleurs ambassadeurs.",
      frequency: "Quotidien",
      scope: { regions: ["Tous"], roles: ["Tous"] },
      sensitivity: 75,
      lastRun: "il y a 1 j",
      runsThisMonth: 31,
      generated: 4, approved: 4, ignored: 0,
      activity: [
        { when: "hier", text: "Marie Dumont a référé Lucas Rey — nouveau profil candidat soumis." }
      ]
    },
    {
      id: "presse", name: "Agent Veille Presse", active: false,
      description: "Lit la presse hospitality romande (Bilan, Le Temps, PME, Hôtellerie Romande) et identifie les contacts à approcher.",
      frequency: "Quotidien",
      scope: { regions: ["VD", "GE", "VS", "BE"], roles: ["—"] },
      sensitivity: 60,
      lastRun: "il y a 3 h (en pause depuis)",
      runsThisMonth: 12,
      generated: 3, approved: 1, ignored: 2,
      activity: [
        { when: "il y a 3 h", text: "Nouveau restaurant Vevey — chef-propriétaire ex-étoilé Lyon. Brouillon prêt." }
      ]
    }
  ];

  // Agents library (not yet installed)
  const agentsLibrary = [
    { name: "Agent Suivi Satisfaction", desc: "Envoie un sondage automatique 48h après chaque placement et compile les retours en notes structurées." },
    { name: "Agent Veille Concurrents", desc: "Surveille les annonces et la communication des agences concurrentes (Adecco Hospitality, Workout, etc.) — alertes hebdomadaires." },
    { name: "Agent Préparation Saison", desc: "Anticipe les pics ski / été / fêtes et prépare le pool 6 semaines à l'avance avec des relances ciblées." },
    { name: "Agent Optimisation Tarifs", desc: "Analyse les fees historiques par profil/client/saison et suggère des ajustements de tarif par opportunité." }
  ];

  // ---------- Audit timeline (~25 entries / 5 days) ----------
  const timeline = [
    { day: "Aujourd'hui", entries: [
      { time: "14:23", text: "Contrat-type envoyé à Marie Dumont (#247) pour mission Carlton.", author: "Agent", undoable: true },
      { time: "13:45", text: "Facture #201 générée — Auberge du Raisin — CHF 1'200.", author: "Agent", undoable: true },
      { time: "11:12", text: "3 candidats proposés à Hôtel du Lac pour mission cuisine samedi.", author: "Agent", undoable: true },
      { time: "10:08", text: "Agent Acquisition Instagram : @mariesophie_chef repéré.", author: "Agent", undoable: false },
      { time: "09:31", text: "Lorraine a approuvé le match #88 (Antoine Berger → Orllati).", author: "Lorraine", undoable: false }
    ]},
    { day: "Hier", entries: [
      { time: "17:05", text: "Relance automatique envoyée à un lot de profils dormants.", author: "Agent", undoable: false },
      { time: "14:30", text: "Pool mis à jour — 12 nouvelles disponibilités reçues.", author: "Agent", undoable: false },
      { time: "11:45", text: "Lorraine a refusé la suggestion de relance pour @veille-presse.", author: "Lorraine", undoable: false },
      { time: "10:15", text: "Rappel de paiement envoyé à BuildCo SARL (facture #189, 32j).", author: "Agent", undoable: true },
      { time: "09:00", text: "Agent EHL Pipeline : 3 nouveaux profils ajoutés depuis l'événement du 9 mai.", author: "Agent", undoable: false }
    ]},
    { day: "Il y a 2 jours", entries: [
      { time: "16:40", text: "Match #87 clôturé — Léa Bonnard → Auberge du Raisin (5/5).", author: "Lorraine", undoable: false },
      { time: "14:15", text: "Sondage post-placement envoyé à 4 clients.", author: "Agent", undoable: true },
      { time: "11:05", text: "Facture #200 générée — Carlton — CHF 2'400.", author: "Agent", undoable: true },
      { time: "08:14", text: "Agent Acquisition Instagram : 2 profils intéressants repérés.", author: "Agent", undoable: false }
    ]},
    { day: "Il y a 3 jours", entries: [
      { time: "15:22", text: "Mission #88 (Hôtel du Lac) ouverte — brief enregistré.", author: "Lorraine", undoable: false },
      { time: "12:40", text: "Agent Réactivation : campagne mensuelle lancée — 47 profils relancés.", author: "Agent", undoable: true },
      { time: "10:18", text: "Match #88 confirmé — Antoine Berger → Orllati.", author: "Lorraine", undoable: false },
      { time: "09:02", text: "Agent Veille Clients : Hôtel Beau-Rivage — événement caritatif 18 juin détecté.", author: "Agent", undoable: false }
    ]},
    { day: "Il y a 4 jours", entries: [
      { time: "18:30", text: "Facture #199 générée — Orllati Group — CHF 1'800.", author: "Agent", undoable: true },
      { time: "15:10", text: "Mission #93 ouverte — Belvédère Wengen, réception saison été.", author: "Lorraine", undoable: false },
      { time: "13:40", text: "Stefan Brunner (#142) pré-sélectionné pour Wengen.", author: "Agent", undoable: true },
      { time: "10:00", text: "Agent EHL Pipeline : événement carrière du 9 mai annoncé, calendrier ajouté.", author: "Agent", undoable: false }
    ]}
  ];

  // ---------- Communications threads ----------
  const comms = {
    whatsapp: [
      { id: 1, who: "Marie Dumont", avatar: "MD", color: "#c42a4e", preview: "Oui je peux pour samedi, à confirmer dimanche", time: "10:42", unread: 0,
        messages: [
          { from: "in", text: "Bonjour Marie, j'ai une mission Carlton samedi soir, service gala. Disponible ?", time: "10:30" },
          { from: "out", text: "Oui je peux pour samedi, à confirmer dimanche", time: "10:42" }
        ] },
      { id: 2, who: "Sara Mateus (Carlton)", avatar: "SM", color: "#7a8cd6", preview: "Parfait. On confirme avec Marie comme l'an dernier ?", time: "09:18", unread: 1,
        messages: [
          { from: "out", text: "Bonjour Sara, j'ai 3 propositions pour le gala. Je peux vous appeler ?", time: "09:05" },
          { from: "in", text: "Parfait. On confirme avec Marie comme l'an dernier ?", time: "09:18" }
        ] },
      { id: 3, who: "Antoine Berger", avatar: "AB", color: "#4ec07a", preview: "Disponible samedi à partir de 10h", time: "Hier", unread: 0 },
      { id: 4, who: "Mme Charrière (Auberge)", avatar: "CH", color: "#e7b94a", preview: "Bonjour, on aurait besoin d'un chef de rang pour le weekend du 25", time: "Hier", unread: 2 },
      { id: 5, who: "Stefan Brunner", avatar: "SB", color: "#b76ad8", preview: "Confirmé pour la saison entière été", time: "Il y a 2j", unread: 0 },
      { id: 6, who: "M. Orllati", avatar: "OR", color: "#5cb8c4", preview: "Merci pour Marie, on a eu d'excellents retours", time: "Il y a 2j", unread: 0 },
      { id: 7, who: "Nadia Vasseur", avatar: "NV", color: "#d68a5c", preview: "OK pour le 22 mai, je bloque", time: "Il y a 3j", unread: 0 },
      { id: 8, who: "Lucas Rey", avatar: "LR", color: "#df98a6", preview: "Bonjour, je suis dispo en soirée WE", time: "Il y a 4j", unread: 0 },
      { id: 9, who: "Mme Roulin (FC Echallens)", avatar: "RO", color: "#7a8cd6", preview: "Match samedi 24, 3 personnes à confirmer", time: "Il y a 5j", unread: 0 },
      { id: 10, who: "Léa Bonnard", avatar: "LB", color: "#4ec07a", preview: "Premier service ok à l'Auberge, super accueil", time: "Il y a 5j", unread: 0 }
    ],
    email: [
      { id: 21, who: "Herr Eggimann (Belvédère)", avatar: "EG", color: "#b76ad8", preview: "Contrat saison signé — bienvenue Stefan", time: "Hier", unread: 0,
        messages: [
          { from: "in", text: "Bonjour Lorraine, contrat saison signé pour Stefan. Bienvenue à lui pour notre saison été.", time: "Hier 14:20" }
        ] },
      { id: 22, who: "M. Berthier (Beau-Rivage)", avatar: "BE", color: "#c42a4e", preview: "Événement caritatif 18 juin — demande de devis", time: "Il y a 2j", unread: 1 },
      { id: 23, who: "Comptabilité Orllati", avatar: "OR", color: "#5cb8c4", preview: "Facture #199 réglée — virement effectué", time: "Il y a 3j", unread: 0 },
      { id: 24, who: "Direction Carlton", avatar: "CA", color: "#7a8cd6", preview: "Renouvellement contrat-cadre 2026 — à discuter", time: "Il y a 4j", unread: 0 },
      { id: 25, who: "M. Favre (PKF Sport)", avatar: "PK", color: "#e7b94a", preview: "Saison estivale — pré-réservation 4 événements", time: "Il y a 5j", unread: 0 },
      { id: 26, who: "Comptabilité BuildCo", avatar: "BC", color: "#d68a5c", preview: "Re: rappel facture #189 — paiement prévu sous 15j", time: "Il y a 6j", unread: 0 },
      { id: 27, who: "EHL — Service carrière", avatar: "EH", color: "#df98a6", preview: "Prochaine journée carrière — 14 juin", time: "Il y a 1 sem", unread: 0 },
      { id: 28, who: "Newsletter Hôtellerie Romande", avatar: "HR", color: "#8b8f99", preview: "Salaires hôtellerie 2026 — nouvelle grille", time: "Il y a 1 sem", unread: 0 }
    ],
    drafts: [
      { id: 31, channel: "WhatsApp", to: "Mme Charrière (Auberge)", reason: "Réponse à demande client",
        preview: "Bonjour Mme Charrière, Léa peut prendre le weekend du 25. Je vous appelle dans la matinée pour caler les détails. Bonne journée." },
      { id: 32, channel: "WhatsApp", to: "Hôtel du Lac", reason: "Proposition de candidats",
        preview: "Bonjour, voici 3 chefs disponibles samedi : Antoine, Marie, Léa. Profils gastronomiques, références solides. Voulez-vous que je vous envoie leurs fiches ?" },
      { id: 33, channel: "Email", to: "M. Berthier (Beau-Rivage)", reason: "Réponse à demande de devis",
        preview: "Bonjour M. Berthier, pour le 18 juin (180 couverts), je propose une équipe de 8 — 1 chef de rang + 6 serveurs + 1 sommelier. Devis détaillé en pièce jointe. Cordialement." },
      { id: 34, channel: "Email", to: "Direction Carlton", reason: "Renouvellement contrat-cadre",
        preview: "Chère Sara, je serais ravie de discuter du renouvellement 2026. Proposition de rencontre la semaine prochaine — mardi ou jeudi vous conviendraient ?" },
      { id: 35, channel: "WhatsApp", to: "Marie Dumont", reason: "Remerciement post-mission",
        preview: "Marie, encore bravo pour le gala Orllati — retour client 5/5, ils t'ont demandée pour la prochaine. À bientôt !" },
      { id: 36, channel: "WhatsApp", to: "Lot de 47 profils cuisine", reason: "Campagne réactivation (lot)",
        preview: "Hello [prénom], on prépare la saison été — tu es toujours dispo sur juin–août ? Réponds OUI/NON pour qu'on te garde dans nos shortlists. Merci !" }
    ],
    templates: [
      { id: 41, name: "Relance disponibilité (mensuelle)", uses: 23,
        body: "Hello [prénom], on prépare le prochain mois — tu es toujours dispo ? Si oui, indique-moi les dates où tu ne l'es pas. Si non, dis-moi quand tu reviens dans le circuit. Merci !" },
      { id: 42, name: "Proposition de mission", uses: 47,
        body: "Bonjour [prénom], j'ai une mission pour toi : [client] · [rôle] · [date] · [durée]. Profil cohérent avec ton historique. Tu peux ? Réponds OUI/NON, on confirme dans la foulée." },
      { id: 43, name: "Rappel de paiement (cordial)", uses: 9,
        body: "Bonjour [contact], petit rappel concernant la facture [#] de [date]. Possible de prévoir le règlement cette semaine ? Merci d'avance." },
      { id: 44, name: "Suivi post-placement", uses: 31,
        body: "Bonjour [contact], comment s'est passée la mission de [prénom] chez vous ? Un retour rapide nous aide à choyer nos profils. Merci !" }
    ],
    broadcastLists: [
      { id: 51, name: "Pool VD — Chefs de rang", count: 38, lastSent: "il y a 4 j" },
      { id: 52, name: "Pool événementiel Genève", count: 22, lastSent: "il y a 12 j" },
      { id: 53, name: "Clients dormants 60j+", count: 6, lastSent: "il y a 21 j" }
    ]
  };

  // ---------- Integrations (Paramètres) ----------
  const integrations = [
    { name: "Google Workspace (Gmail, Drive)", status: "ok", note: "Connecté · andrea@blackcode.ch" },
    { name: "Google Calendar", status: "ok", note: "Lecture + écriture · agenda Lorraine" },
    { name: "WhatsApp Business", status: "ok", note: "Numéro pro vérifié · API officielle" },
    { name: "Stripe", status: "ok", note: "Compte CHF · paiements et liens de facture" },
    { name: "Firebase (votre site staffup.ch)", status: "ok", note: "Synchronisation candidats / demandes" },
    { name: "Instagram", status: "ok", note: "Lecture seule · veille acquisition" },
    { name: "LinkedIn", status: "ok", note: "Lecture seule · veille EHL et profils" }
  ];

  // ---------- Public gallery cards (12, anonymized) ----------
  // Same shape as Phase 1, kept inline.

  // ---------- Sample chat prompts ----------
  const promptSamples = [
    "Trouve-moi trois chefs de rang disponibles ce weekend dans 20km de Lausanne",
    "Quels profils n'ont pas été placés depuis 60 jours ?",
    "Génère la facture pour la mise en relation avec le Carlton de vendredi",
    "Quels clients n'ont pas commandé depuis 45 jours ?"
  ];

  // ---------- KPIs (Tableau de bord) ----------
  const kpis = [
    { label: "Demandes urgentes", value: "2", sub: "+ 1 depuis ce matin" },
    { label: "Profils disponibles ce w-end", value: "43", sub: "dont 12 chefs de rang" },
    { label: "Factures en attente", value: "3 / CHF 3'200", sub: "1 en retard de 32 jours" },
    { label: "Revenu MTD", value: "CHF 8'400", sub: "↑ 18 % vs avril" }
  ];

  // ---------- Sidebar sections (used by app-shell.js) ----------
  const sidebar = [
    { id: "tableau-bord",   label: "Tableau de bord",       file: "app-tableau-bord.html", icon: "layout-dashboard", badge: "4" },
    { id: "pool",           label: "Pool de candidats",      file: "app-pool.html", icon: "users" },
    { id: "clients",        label: "Clients",                file: "app-clients.html", icon: "handshake" },
    { id: "demandes",       label: "Demandes en cours",      file: "app-demandes.html", icon: "inbox", badge: "2" },
    { id: "matching",       label: "Matching & mises en relation", file: "app-matching.html", icon: "git-merge" },
    { id: "galerie",        label: "Galerie publique",       file: "app-galerie.html", icon: "image" },
    { id: "facturation",    label: "Facturation",            file: "app-facturation.html", icon: "receipt", badge: "1" },
    { id: "communications", label: "Communications",         file: "app-communications.html", icon: "message-circle", badge: "6" },
    { id: "agents",         label: "Agents autonomes",       file: "app-agents.html", icon: "bot" },
    { id: "journal",        label: "Journal de bord",        file: "app-journal.html", icon: "book-open" },
    { id: "parametres",     label: "Paramètres",             file: "app-parametres.html", icon: "settings" }
  ];

  return {
    candidates, clients, missions, invoices, revenueMonth, chartData,
    proactive, agents, agentsLibrary, timeline, comms, integrations,
    promptSamples, kpis, sidebar
  };
})();
