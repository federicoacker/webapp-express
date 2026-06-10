const reviews = [
    {
        title: "Un'esperienza preistorica indimenticabile",
        description: "Il T-Rex Prime Burger è semplicemente straordinario. La carne ha un sapore profondo e autentico che ricorda veramente i dinosauri preistorici. Ogni morso è un viaggio nel tempo.",
        vote: 5,
        likes: 0,
        product_id: 1,
        slug: "un-esperienza-preistorica-indimenticabile"
    },
    {
        title: "Veloce come un Raptor",
        description: "Il Raptor Double Smash non mi ha deluso. La texture a doppio strato e il gusto intenso affumicato lo rendono un must. Incredibilmente soddisfacente.",
        vote: 5,
        likes: 0,
        product_id: 2,
        slug: "veloce-come-un-raptor"
    },
    {
        title: "Croccantezza perfetta",
        description: "Lo Stego Crunch Burger vive al suo nome. La croccantezza del bordo combinata con la succosità del centro è un'armonia di contrasti. Davvero bello!",
        vote: 4,
        likes: 0,
        product_id: 3,
        slug: "croccantezza-perfetta"
    },
    {
        title: "Monumentale come un Bronto",
        description: "Il Bronto Tower Burger è mastodontico nel migliore dei modi. Una carne sanguigna e intensa che mantiene il carattere primordiale fino all'ultimo morso.",
        vote: 5,
        likes: 0,
        product_id: 4,
        slug: "monumentale-come-un-bronto"
    },
    {
        title: "Un classico reinventato",
        description: "Il Cretaceous Classic Burger rappresenta eleganza e robustezza. Il profilo gustativo è sofisticato pur mantenendo l'autenticità di un burger giurassico.",
        vote: 4,
        likes: 0,
        product_id: 5,
        slug: "un-classico-reinventato"
    },
    {
        title: "Snack addictive e croccanti",
        description: "Le Raptor Crispy Bites sono perfette per uno snack veloce. Croccanti, sapide e leggermente speziate. Non riesco a smettere di mangiarle!",
        vote: 4,
        likes: 0,
        product_id: 6,
        slug: "snack-addictive-e-croccanti"
    },
    {
        title: "Nostalgici e deliziosi",
        description: "I Triassic Chicken Nuggets ricordano i classici della mia infanzia ma con un twist paleontologico. Morbidi dentro, croccanti fuori, semplicemente perfetti.",
        vote: 4,
        likes: 0,
        product_id: 7,
        slug: "nostalgici-e-deliziosi"
    },
    {
        title: "Mini bocconi di piacere",
        description: "I Compsognathus Mini Bites hanno un sapore delicato e armonico. Perfetti per chi vuole assaggiare senza appesantirsi. Una scelta intelligente.",
        vote: 4,
        likes: 0,
        product_id: 8,
        slug: "mini-bocconi-di-piacere"
    },
    {
        title: "Un'esplosione di sapori",
        description: "Le Meteor Pop Bites sono sorprendenti e affascinanti. Ogni pezzo offre una sequenza di aromi che si sviluppano lentamente. Interessante e avvolgente.",
        vote: 5,
        likes: 0,
        product_id: 9,
        slug: "un-esplosione-di-sapori"
    },
    {
        title: "Pepate e selvagge",
        description: "Le Jurassic Pepper Bites hanno il pepe giusto, non troppo, non troppo poco. Il finale intenso e profondo le rende memorabili. Ottimo snack serale!",
        vote: 4,
        likes: 0,
        product_id: 10,
        slug: "pepate-e-selvagge"
    },
    {
        title: "Fresco come una brezza giurassica",
        description: "Il Ptero Fresh Wrap è una vera boccata d'aria. Le verdure sono fresche e il condimento cremoso equilibra tutto perfettamente. Leggero ma profondo.",
        vote: 4,
        likes: 0,
        product_id: 11,
        slug: "fresco-come-una-brezza-giurassica"
    },
    {
        title: "Affumicato e terroso",
        description: "Il Savanna Smoke Wrap mi ha sorpreso con la sua complessità. L'affumicatura si intreccia perfettamente con il fondo erbaceo. Davvero intrigante.",
        vote: 5,
        likes: 0,
        product_id: 12,
        slug: "affumicato-e-terroso"
    },
    {
        title: "Ranch preistorico",
        description: "Il Fossil Ranch Wrap è ricco e cremoso come promesso. L'equilibrio tra affumicato, verde e dolcezza è impeccabile. Un wrap completo e soddisfacente.",
        vote: 4,
        likes: 0,
        product_id: 13,
        slug: "ranch-preistorico"
    },
    {
        title: "Intenso e memorabile",
        description: "Il Volcanic Spicy Wrap è per chi ama il calore. La spezia arriva forte ma non copre gli altri sapori. Un'esperienza vulcanica autenticamente riuscita.",
        vote: 5,
        likes: 0,
        product_id: 14,
        slug: "intenso-e-memorabile"
    },
    {
        title: "Equilibrato e raffinato",
        description: "L'Herbivore Balance Wrap dimostra che la rinuncia alla carne non significa sacrificare il sapore. Naturale, armonioso e sorprendentemente profondo.",
        vote: 4,
        likes: 0,
        product_id: 15,
        slug: "equilibrato-e-raffinato"
    },
    {
        title: "Patatine incandescenti",
        description: "Le Lava Fries hanno quella croccantezza calda e quel retrogusto fumé che le rende speciali. Un contorno che non passa inosservato. Fantastico!",
        vote: 5,
        likes: 0,
        product_id: 16,
        slug: "patatine-incandescenti"
    },
    {
        title: "Anelli di oro paleontologico",
        description: "I Dino Onion Rings sono il perfetto equilibrio tra croccante e morbido. La nota affumicata richiama una foresta antica in modo suggestivo. Eccellenti.",
        vote: 4,
        likes: 0,
        product_id: 17,
        slug: "anelli-di-oro-paleontologico"
    },
    {
        title: "Rustico e mineralizzato",
        description: "Le Canyon Potato Wedges hanno un carattere rustico che mi piace. Il cuore morbido e l'esterno croccante creano un contrasto perfetto. Sostanzioso!",
        vote: 4,
        likes: 0,
        product_id: 18,
        slug: "rustico-e-mineralizzato"
    },
    {
        title: "Freschezza primordiale",
        description: "La Jurassic Coleslaw Cup è fresca e croccante. L'acidulo bilancia bene la croccantezza vegetale. Un contorno che pulisce il palato in modo elegante.",
        vote: 4,
        likes: 0,
        product_id: 19,
        slug: "freschezza-primordiale"
    },
    {
        title: "Dolcezza naturale di un'era lontana",
        description: "Le Cretaceous Corn Bites hanno una dolcezza naturale affascinante. Il profilo goloso si amplifica in un finale avvolgente. Originale e piacevole.",
        vote: 4,
        likes: 0,
        product_id: 20,
        slug: "dolcezza-naturale-di-un-era-lontana"
    },
    {
        title: "Ambrata e affumicata",
        description: "L'Amber BBQ Sauce è semplicemente perfetta. Le note caramellate e affumicate non sovrrastano ma amplificano ogni piatto. Una salsa essenziale.",
        vote: 5,
        likes: 0,
        product_id: 21,
        slug: "ambrata-e-affumicata"
    },
    {
        title: "Piccante ed audace",
        description: "La Raptor Hot Sauce è feroce in modo buono. Il calore si sviluppa lentamente e l'affumicatura aggiunge profondità. Per chi ama l'intensità!",
        vote: 5,
        likes: 0,
        product_id: 22,
        slug: "piccante-ed-audace"
    },
    {
        title: "Cremosa e versatile",
        description: "La Fossil Mayo Sauce è vellutata e delicata. Perfetta per bilanciare sapori intensi. Una salsa che sembra ricordare fossili avvolti in crema.",
        vote: 4,
        likes: 0,
        product_id: 23,
        slug: "cremosa-e-versatile"
    },
    {
        title: "Affumicata come la preistoria",
        description: "La Smoky Tar Sauce è robusta e complessa. L'elemento tar aggiunge profondità e arcaismo. Per chi vuole un sapore audace e ricco.",
        vote: 4,
        likes: 0,
        product_id: 24,
        slug: "affumicata-come-la-preistoria"
    },
    {
        title: "Dolce-piccante equilibrato",
        description: "Il Meteor Honey Mustard è bellissimo. Il contrasto miele-mostarda è ben calibrato e il finale leggermente speziato completa perfettamente.",
        vote: 5,
        likes: 0,
        product_id: 25,
        slug: "dolce-piccante-equilibrato"
    },
    {
        title: "Freschezza dissetante",
        description: "La Glacier Cola è fresca e frizzante con quella nota minerale particolare. Perfetta per accompagnare piatti intensi senza appesantire.",
        vote: 4,
        likes: 0,
        product_id: 26,
        slug: "freschezza-dissetante"
    },
    {
        title: "Agrume brillante",
        description: "La Jurassic Lemon Soda è brillante e leggera. Un contrappunto acidulo che pulisce il palato tra i morsi. Esattamente quello che serve!",
        vote: 4,
        likes: 0,
        product_id: 27,
        slug: "agrume-brillante"
    },
    {
        title: "Tropicale e vellutato",
        description: "Il Triassic Mango Shake è cremoso e ricco. Il mango maturo richiama frutti antichi e climi lussureggianti. Perfetto per una pausa dolce.",
        vote: 5,
        likes: 0,
        product_id: 28,
        slug: "tropicale-e-vellutato"
    },
    {
        title: "Conforto cremoso",
        description: "Il Bronto Vanilla Milk è avvolgente e rassicurante. La vaniglia calda ha un sapore di erbe dolci antiche. Perfetto per addolcire il pomeriggio.",
        vote: 4,
        likes: 0,
        product_id: 29,
        slug: "conforto-cremoso"
    },
    {
        title: "Erbaceo e dissetante",
        description: "Il Cretaceous Iced Tea è fresco e pulito. L'erba selvatica si sente bene e l'acidità è delicata. Un tè freddo che sa di primordiale.",
        vote: 4,
        likes: 0,
        product_id: 30,
        slug: "erbaceo-e-dissetante"
    },
    {
        title: "Burroso e caramellato",
        description: "Il Fossil Cookie Pie è avvolgente e fragrante. La componente croccante si intreccia perfettamente con un cuore dolce. Antichi racconti gastronomici.",
        vote: 5,
        likes: 0,
        product_id: 31,
        slug: "burroso-e-caramellato"
    },
    {
        title: "Cioccolato profondo",
        description: "Il Meteor Choco Sundae è ricco e intenso. Le scaglie di cioccolato e il finale leggermente tostato lo rendono memorabile. Un'esperienza cosmica!",
        vote: 5,
        likes: 0,
        product_id: 32,
        slug: "cioccolato-profondo"
    },
    {
        title: "Dorato e caramellato",
        description: "L'Amber Caramel Muffin è soffice e dorato. La dolcezza è bilanciata e il retrogusto di zucchero bruciato la rende speciale. Comfort food!",
        vote: 4,
        likes: 0,
        product_id: 33,
        slug: "dorato-e-caramellato"
    },
    {
        title: "Intenso e umido",
        description: "Il Jurassic Brownie Bite è cioccolatoso e deciso. La densità ricorda lava solidificata e il cuore umido rilascia aromi tostati. Bellissimo!",
        vote: 5,
        likes: 0,
        product_id: 34,
        slug: "intenso-e-umido"
    },
    {
        title: "Cremoso e delicato",
        description: "La Veloci Cream Cup è morbida e raffinata. L'equilibrio gentile tra dolcezza e freschezza la rende perfetta. Un piccolo interludio elegante.",
        vote: 4,
        likes: 0,
        product_id: 35,
        slug: "cremoso-e-delicato"
    },
    {
        title: "Menu avventuroso",
        description: "Il Predator Combo Menu è vario e completo. Ogni elemento raconta una storia e i contrasti di intensità sono ben calibrati. Un'avventura culinaria!",
        vote: 5,
        likes: 0,
        product_id: 36,
        slug: "menu-avventuroso"
    },
    {
        title: "Caldo e accogliente",
        description: "Il Volcano Family Menu è ricco di aromi e conviviale. La progressione di sapori è intensa ma bilanciata. Perfetto per condividere!",
        vote: 4,
        likes: 0,
        product_id: 37,
        slug: "caldo-e-accogliente"
    },
    {
        title: "Fresco e sorprendente",
        description: "L'Explorer Lunch Menu è elegante e dinamico. Ogni piatto si rincorre con equilibrio tra note saline, erbacee e aromatiche. Un percorso intrigante!",
        vote: 5,
        likes: 0,
        product_id: 38,
        slug: "fresco-e-sorprendente"
    },
    {
        title: "Rustico e fumé",
        description: "Il Campfire Dinner Menu evoca un falò nella notte giurassica. Gli aromi di legno bruciato e carne affumicata creano un'atmosfera autenticamente antica.",
        vote: 5,
        likes: 0,
        product_id: 39,
        slug: "rustico-e-fume"
    },
    {
        title: "Solido e accessibile",
        description: "Il Jurassic Value Menu è ben bilanciato e autentico. Offre una sequenza gustativa coerente e soddisfacente a un prezzo accessibile. Ottima scelta!",
        vote: 4,
        likes: 0,
        product_id: 40,
        slug: "solido-e-accessibile"
    }
];

export default reviews;