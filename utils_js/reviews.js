const reviews = [
    // 1 - T-Rex Prime Burger
    {
        title: "Un'esperienza preistorica indimenticabile",
        description: "Il T-Rex Prime Burger è semplicemente straordinario. La carne ha un sapore profondo e autentico che ricorda veramente i dinosauri preistorici. Ogni morso è un viaggio nel tempo.",
        vote: 5,
        likes: 0,
        product_id: 1,
        slug: "un-esperienza-preistorica-indimenticabile"
    },
    {
        title: "Il re dei burger",
        description: "Mastodontico e succoso, il T-Rex Prime Burger non delude. La fibra carnosa è incredibilmente intensa e il finale ferino resta a lungo. Porzione generosa e cottura perfetta.",
        vote: 5,
        likes: 0,
        product_id: 1,
        slug: "il-re-dei-burger"
    },
    {
        title: "Sapore opulento ma equilibrato",
        description: "Temevo fosse troppo pesante e invece il T-Rex Prime Burger mantiene un bell'equilibrio tra carattere selvatico e mangiabilità. Carne di qualità, lo riprenderò sicuramente.",
        vote: 4,
        likes: 0,
        product_id: 1,
        slug: "sapore-opulento-ma-equilibrato"
    },
    // 2 - Raptor Double Smash
    {
        title: "Veloce come un Raptor",
        description: "Il Raptor Double Smash non mi ha deluso. La texture a doppio strato e il gusto intenso affumicato lo rendono un must. Incredibilmente soddisfacente.",
        vote: 5,
        likes: 0,
        product_id: 2,
        slug: "veloce-come-un-raptor"
    },
    {
        title: "Doppio strato, doppio piacere",
        description: "Lo smash è eseguito alla perfezione: bordi croccanti e cuore succoso. Le note affumicate e speziate sono ben calibrate. Uno dei migliori double che abbia provato.",
        vote: 5,
        likes: 0,
        product_id: 2,
        slug: "doppio-strato-doppio-piacere"
    },
    {
        title: "Agile e imponente",
        description: "Il Raptor Double Smash riesce a essere leggero da mangiare ma con un impatto deciso. I toni minerali e terrosi danno carattere. Promosso a pieni voti.",
        vote: 4,
        likes: 0,
        product_id: 2,
        slug: "agile-e-imponente"
    },
    // 3 - Stego Crunch Burger
    {
        title: "Croccantezza perfetta",
        description: "Lo Stego Crunch Burger vive al suo nome. La croccantezza del bordo combinata con la succosità del centro è un'armonia di contrasti. Davvero bello!",
        vote: 4,
        likes: 0,
        product_id: 3,
        slug: "croccantezza-perfetta"
    },
    {
        title: "Contrasto croccante-morbido riuscito",
        description: "Profilo terroso e affumicato che richiama il Cretaceo. Il contrasto tra esterno croccante e interno denso è la sua forza. Un burger strutturato e appagante.",
        vote: 4,
        likes: 0,
        product_id: 3,
        slug: "contrasto-croccante-morbido-riuscito"
    },
    // 4 - Bronto Tower Burger
    {
        title: "Monumentale come un Bronto",
        description: "Il Bronto Tower Burger è mastodontico nel migliore dei modi. Una carne sanguigna e intensa che mantiene il carattere primordiale fino all'ultimo morso.",
        vote: 5,
        likes: 0,
        product_id: 4,
        slug: "monumentale-come-un-bronto"
    },
    {
        title: "Per chi ha fame da dinosauro",
        description: "Porzione enorme e sapore pieno. La succosità avvolge il palato e il retrogusto di praterie antiche è sorprendente. Da affrontare con appetito vero.",
        vote: 5,
        likes: 0,
        product_id: 4,
        slug: "per-chi-ha-fame-da-dinosauro"
    },
    {
        title: "Imponente ma un filo troppo abbondante",
        description: "Sapore deciso e di carattere, qualità della carne ottima. Unico appunto: davvero tanto, faticato a finirlo. Per i veri carnivori resta una scelta top.",
        vote: 4,
        likes: 0,
        product_id: 4,
        slug: "imponente-ma-un-filo-troppo-abbondante"
    },
    {
        title: "Forza giurassica senza compromessi",
        description: "Fibra sanguigna e intensa, esperienza gustativa lunga e avvolgente. Il Bronto Tower è pensato per chi non scende a compromessi sul sapore. Mi ha conquistato.",
        vote: 5,
        likes: 0,
        product_id: 4,
        slug: "forza-giurassica-senza-compromessi"
    },
    // 5 - Cretaceous Classic Burger
    {
        title: "Un classico reinventato",
        description: "Il Cretaceous Classic Burger rappresenta eleganza e robustezza. Il profilo gustativo è sofisticato pur mantenendo l'autenticità di un burger giurassico.",
        vote: 4,
        likes: 0,
        product_id: 5,
        slug: "un-classico-reinventato"
    },
    {
        title: "Sapido e raffinato",
        description: "Note erbacee e minerali con una persistenza piena. Morso caldo e ricco, equilibrio impeccabile tra succo naturale e dolcezza animale. Un classico ben fatto.",
        vote: 5,
        likes: 0,
        product_id: 5,
        slug: "sapido-e-raffinato"
    },
    // 6 - Raptor Crispy Bites
    {
        title: "Snack addictive e croccanti",
        description: "Le Raptor Crispy Bites sono perfette per uno snack veloce. Croccanti, sapide e leggermente speziate. Non riesco a smettere di mangiarle!",
        vote: 4,
        likes: 0,
        product_id: 6,
        slug: "snack-addictive-e-croccanti"
    },
    {
        title: "Speziate al punto giusto",
        description: "Il tocco speziato evoca davvero un paesaggio mesozoico. Croccantezza costante dal primo all'ultimo boccone. Ottime da condividere o tutte per sé.",
        vote: 4,
        likes: 0,
        product_id: 6,
        slug: "speziate-al-punto-giusto"
    },
    {
        title: "Croccantezza che non stanca",
        description: "Consistenza bilanciata e profilo vivo. Le ho prese come contorno e sono sparite in un attimo. Snack riuscito con un richiamo autentico ai climi antichi.",
        vote: 5,
        likes: 0,
        product_id: 6,
        slug: "croccantezza-che-non-stanca"
    },
    // 7 - Triassic Chicken Nuggets
    {
        title: "Nostalgici e deliziosi",
        description: "I Triassic Chicken Nuggets ricordano i classici della mia infanzia ma con un twist paleontologico. Morbidi dentro, croccanti fuori, semplicemente perfetti.",
        vote: 4,
        likes: 0,
        product_id: 7,
        slug: "nostalgici-e-deliziosi"
    },
    {
        title: "Cuore morbido, fragranza antica",
        description: "Gusto dolce e interessante, con un richiamo di erbe selvatiche. La croccantezza esterna è perfetta e il cuore resta morbido. Piacciono tantissimo anche ai bambini.",
        vote: 5,
        likes: 0,
        product_id: 7,
        slug: "cuore-morbido-fragranza-antica"
    },
    // 8 - Compsognathus Mini Bites
    {
        title: "Mini bocconi di piacere",
        description: "I Compsognathus Mini Bites hanno un sapore delicato e armonico. Perfetti per chi vuole assaggiare senza appesantirsi. Una scelta intelligente.",
        vote: 4,
        likes: 0,
        product_id: 8,
        slug: "mini-bocconi-di-piacere"
    },
    {
        title: "Delicati e ben definiti",
        description: "Profilo aromatico gentile, texture armoniosa e una presenza dolce-salata ben equilibrata. Come un frammento di giungla antica. Snack leggero ma appagante.",
        vote: 4,
        likes: 0,
        product_id: 8,
        slug: "delicati-e-ben-definiti"
    },
    {
        title: "Piccoli ma sorprendenti",
        description: "Non mi aspettavo tanta finezza in bocconcini così piccoli. Freschi e affascinanti, ideali per uno spuntino senza sensi di colpa. Li riordinerò.",
        vote: 5,
        likes: 0,
        product_id: 8,
        slug: "piccoli-ma-sorprendenti"
    },
    // 9 - Meteor Pop Bites
    {
        title: "Un'esplosione di sapori",
        description: "Le Meteor Pop Bites sono sorprendenti e affascinanti. Ogni pezzo offre una sequenza di aromi che si sviluppano lentamente. Interessante e avvolgente.",
        vote: 5,
        likes: 0,
        product_id: 9,
        slug: "un-esplosione-di-sapori"
    },
    {
        title: "Note tostate e speziate",
        description: "Croccanti e sapide, con una profondità che si sviluppa tra tostatura ed eco speziata. Davvero diverse dal solito snack. Un piccolo impatto cosmico in bocca.",
        vote: 4,
        likes: 0,
        product_id: 9,
        slug: "note-tostate-e-speziate"
    },
    // 10 - Jurassic Pepper Bites
    {
        title: "Pepate e selvagge",
        description: "Le Jurassic Pepper Bites hanno il pepe giusto, non troppo, non troppo poco. Il finale intenso e profondo le rende memorabili. Ottimo snack serale!",
        vote: 4,
        likes: 0,
        product_id: 10,
        slug: "pepate-e-selvagge"
    },
    {
        title: "Carattere deciso e rustico",
        description: "La punta piccante è ben calibrata e poggia su una base minerale e rustica. Sanno di steppe di un'era remota. Persistenti e intriganti, perfette con una birra.",
        vote: 5,
        likes: 0,
        product_id: 10,
        slug: "carattere-deciso-e-rustico"
    },
    {
        title: "Piccantezza ben dosata",
        description: "Per chi ama il pepe senza esagerazioni queste bites sono ideali. Finale profondo e aroma di cieli aperti. Snack solido e di personalità.",
        vote: 4,
        likes: 0,
        product_id: 10,
        slug: "piccantezza-ben-dosata"
    },
    // 11 - Ptero Fresh Wrap
    {
        title: "Fresco come una brezza giurassica",
        description: "Il Ptero Fresh Wrap è una vera boccata d'aria. Le verdure sono fresche e il condimento cremoso equilibra tutto perfettamente. Leggero ma profondo.",
        vote: 4,
        likes: 0,
        product_id: 11,
        slug: "fresco-come-una-brezza-giurassica"
    },
    {
        title: "Leggero e avvolgente",
        description: "Note vegetali e una chiusura cremosa che non appesantisce. Equilibrio gentile e interessante che resta al palato. Perfetto per un pranzo veloce e sano.",
        vote: 5,
        likes: 0,
        product_id: 11,
        slug: "leggero-e-avvolgente"
    },
    // 12 - Savanna Smoke Wrap
    {
        title: "Affumicato e terroso",
        description: "Il Savanna Smoke Wrap mi ha sorpreso con la sua complessità. L'affumicatura si intreccia perfettamente con il fondo erbaceo. Davvero intrigante.",
        vote: 5,
        likes: 0,
        product_id: 12,
        slug: "affumicato-e-terroso"
    },
    {
        title: "Sa di legno e terra",
        description: "Un wrap caldo che richiama una savana antica. Unisce materia e aroma in modo equilibrato, con una persistenza notevole. Per chi ama i sapori profondi.",
        vote: 4,
        likes: 0,
        product_id: 12,
        slug: "sa-di-legno-e-terra"
    },
    {
        title: "Complesso ma bilanciato",
        description: "L'intensità affumicata non copre il resto: il fondo erbaceo allunga la persistenza e tiene tutto in equilibrio. Costruzione gustativa davvero ben pensata.",
        vote: 5,
        likes: 0,
        product_id: 12,
        slug: "complesso-ma-bilanciato"
    },
    // 13 - Fossil Ranch Wrap
    {
        title: "Ranch preistorico",
        description: "Il Fossil Ranch Wrap è ricco e cremoso come promesso. L'equilibrio tra affumicato, verde e dolcezza è impeccabile. Un wrap completo e soddisfacente.",
        vote: 4,
        likes: 0,
        product_id: 13,
        slug: "ranch-preistorico"
    },
    {
        title: "Cremoso e ben sfaccettato",
        description: "Gli aromi si evolvono lentamente e il gusto resta avvolgente fino alla fine. Un profilo pieno, perfetto per chi cerca un wrap sostanzioso ma armonico.",
        vote: 5,
        likes: 0,
        product_id: 13,
        slug: "cremoso-e-ben-sfaccettato"
    },
    // 14 - Volcanic Spicy Wrap
    {
        title: "Intenso e memorabile",
        description: "Il Volcanic Spicy Wrap è per chi ama il calore. La spezia arriva forte ma non copre gli altri sapori. Un'esperienza vulcanica autenticamente riuscita.",
        vote: 5,
        likes: 0,
        product_id: 14,
        slug: "intenso-e-memorabile"
    },
    {
        title: "Eruzione di spezie",
        description: "La scarica di calore risveglia i sensi e la base aromatica resta profonda. Potente e sorprendente come un'eruzione antica. Consigliato agli amanti del piccante.",
        vote: 5,
        likes: 0,
        product_id: 14,
        slug: "eruzione-di-spezie"
    },
    {
        title: "Calore deciso ma godibile",
        description: "Piccante sì, ma con equilibrio: gli altri sapori si percepiscono ancora. Un wrap caldo e di carattere che lascia il segno. Bello intenso.",
        vote: 4,
        likes: 0,
        product_id: 14,
        slug: "calore-deciso-ma-godibile"
    },
    // 15 - Herbivore Balance Wrap
    {
        title: "Equilibrato e raffinato",
        description: "L'Herbivore Balance Wrap dimostra che la rinuncia alla carne non significa sacrificare il sapore. Naturale, armonioso e sorprendentemente profondo.",
        vote: 4,
        likes: 0,
        product_id: 15,
        slug: "equilibrato-e-raffinato"
    },
    {
        title: "Veg ma con profondità",
        description: "Note erbacee e morbidezza gentile, un paesaggio verde e primordiale in un wrap. Leggero ma con una profondità inaspettata. Ottima opzione vegetariana.",
        vote: 5,
        likes: 0,
        product_id: 15,
        slug: "veg-ma-con-profondita"
    },
    // 16 - Lava Fries
    {
        title: "Patatine incandescenti",
        description: "Le Lava Fries hanno quella croccantezza calda e quel retrogusto fumé che le rende speciali. Un contorno che non passa inosservato. Fantastico!",
        vote: 5,
        likes: 0,
        product_id: 16,
        slug: "patatine-incandescenti"
    },
    {
        title: "Croccanti e fumé",
        description: "Profilo minerale, come lava antica che si solidifica in sapore. Croccantezza che apre una sequenza gustativa lunga. Il contorno perfetto per ogni burger.",
        vote: 4,
        likes: 0,
        product_id: 16,
        slug: "croccanti-e-fume"
    },
    {
        title: "Mai più senza",
        description: "Rustiche, calde e con quel tocco affumicato che le distingue dalle solite patatine. Le ordino ormai a ogni visita. Promosse.",
        vote: 5,
        likes: 0,
        product_id: 16,
        slug: "mai-piu-senza"
    },
    // 17 - Dino Onion Rings
    {
        title: "Anelli di oro paleontologico",
        description: "I Dino Onion Rings sono il perfetto equilibrio tra croccante e morbido. La nota affumicata richiama una foresta antica in modo suggestivo. Eccellenti.",
        vote: 4,
        likes: 0,
        product_id: 17,
        slug: "anelli-di-oro-paleontologico"
    },
    {
        title: "Dolci e croccanti",
        description: "Sapore dolce e rotondo, croccantezza avvolgente e interno soffice. Ogni anello è ben bilanciato. Un accompagnamento che aggiunge comfort al piatto.",
        vote: 4,
        likes: 0,
        product_id: 17,
        slug: "dolci-e-croccanti"
    },
    // 18 - Canyon Potato Wedges
    {
        title: "Rustico e mineralizzato",
        description: "Le Canyon Potato Wedges hanno un carattere rustico che mi piace. Il cuore morbido e l'esterno croccante creano un contrasto perfetto. Sostanzioso!",
        vote: 4,
        likes: 0,
        product_id: 18,
        slug: "rustico-e-mineralizzato"
    },
    {
        title: "Come un canyon scavato dal tempo",
        description: "Equilibrio tra sapidità e dolcezza del tubero, con una sensazione di terra antica. Durano al palato e riempiono il piatto con carattere. Davvero buone.",
        vote: 5,
        likes: 0,
        product_id: 18,
        slug: "come-un-canyon-scavato-dal-tempo"
    },
    {
        title: "Sostanziose e saporite",
        description: "Wedges generose, cuore morbido ed esterno croccante. Un contorno rustico che da solo quasi basta. Ottimo rapporto gusto-quantità.",
        vote: 4,
        likes: 0,
        product_id: 18,
        slug: "sostanziose-e-saporite"
    },
    // 19 - Jurassic Coleslaw Cup
    {
        title: "Freschezza primordiale",
        description: "La Jurassic Coleslaw Cup è fresca e croccante. L'acidulo bilancia bene la croccantezza vegetale. Un contorno che pulisce il palato in modo elegante.",
        vote: 4,
        likes: 0,
        product_id: 19,
        slug: "freschezza-primordiale"
    },
    {
        title: "Il contrappunto giusto",
        description: "Verdure luminose e nota acidula ben calibrata. Perfetta per alleggerire i piatti più intensi. Contrasto vivo e pulito, aggiunge energia al pasto.",
        vote: 5,
        likes: 0,
        product_id: 19,
        slug: "il-contrappunto-giusto"
    },
    // 20 - Cretaceous Corn Bites
    {
        title: "Dolcezza naturale di un'era lontana",
        description: "Le Cretaceous Corn Bites hanno una dolcezza naturale affascinante. Il profilo goloso si amplifica in un finale avvolgente. Originale e piacevole.",
        vote: 4,
        likes: 0,
        product_id: 20,
        slug: "dolcezza-naturale-di-un-era-lontana"
    },
    {
        title: "Mais dolce e terroso",
        description: "Texture morbida che richiama grani antichi, con un tocco di calore e tradizione. Le note di mais si ampliano nel finale. Contorno originale e goloso.",
        vote: 4,
        likes: 0,
        product_id: 20,
        slug: "mais-dolce-e-terroso"
    },
    {
        title: "Una sorpresa golosa",
        description: "Non le conoscevo e mi hanno conquistato: dolci al punto giusto e morbide. Un campo arcaico in un boccone. Le rifarei volentieri come contorno diverso.",
        vote: 5,
        likes: 0,
        product_id: 20,
        slug: "una-sorpresa-golosa"
    },
    // 21 - Amber BBQ Sauce
    {
        title: "Ambrata e affumicata",
        description: "L'Amber BBQ Sauce è semplicemente perfetta. Le note caramellate e affumicate non sovrastano ma amplificano ogni piatto. Una salsa essenziale.",
        vote: 5,
        likes: 0,
        product_id: 21,
        slug: "ambrata-e-affumicata"
    },
    {
        title: "Corposa e bilanciata",
        description: "Profonda e calda, con una corposità che esalta carne e contorni senza coprirli. Ricorda resine antiche e arie di bosco. Ne metterei ovunque.",
        vote: 4,
        likes: 0,
        product_id: 21,
        slug: "corposa-e-bilanciata"
    },
    // 22 - Raptor Hot Sauce
    {
        title: "Piccante ed audace",
        description: "La Raptor Hot Sauce è feroce in modo buono. Il calore si sviluppa lentamente e l'affumicatura aggiunge profondità. Per chi ama l'intensità!",
        vote: 5,
        likes: 0,
        product_id: 22,
        slug: "piccante-ed-audace"
    },
    {
        title: "Calore che cresce",
        description: "Note speziate che si sviluppano piano e una componente affumicata da incendi antichi. Una scossa audace ma godibile. Salsa per chi cerca carattere vero.",
        vote: 5,
        likes: 0,
        product_id: 22,
        slug: "calore-che-cresce"
    },
    {
        title: "Feroce ma con profondità",
        description: "Non solo piccante fine a sé stesso: c'è una profondità affumicata che la rende interessante. Da dosare con attenzione, ma davvero ben fatta.",
        vote: 4,
        likes: 0,
        product_id: 22,
        slug: "feroce-ma-con-profondita"
    },
    // 23 - Fossil Mayo Sauce
    {
        title: "Cremosa e versatile",
        description: "La Fossil Mayo Sauce è vellutata e delicata. Perfetta per bilanciare sapori intensi. Una salsa che sembra ricordare fossili avvolti in crema.",
        vote: 4,
        likes: 0,
        product_id: 23,
        slug: "cremosa-e-versatile"
    },
    {
        title: "Setosa e delicata",
        description: "Consistenza setosa e retrogusto delicato, ideale per smorzare le note più forti. Un accompagnamento familiare e versatile. Si sposa con tutto.",
        vote: 4,
        likes: 0,
        product_id: 23,
        slug: "setosa-e-delicata"
    },
    // 24 - Smoky Tar Sauce
    {
        title: "Affumicata come la preistoria",
        description: "La Smoky Tar Sauce è robusta e complessa. L'elemento tar aggiunge profondità e arcaismo. Per chi vuole un sapore audace e ricco.",
        vote: 4,
        likes: 0,
        product_id: 24,
        slug: "affumicata-come-la-preistoria"
    },
    {
        title: "Robusta e persistente",
        description: "Contrasto tra dolce e affumicato che resta a lungo al palato. Un tocco antico e audace per i piatti più decisi. Trama gustativa davvero complessa.",
        vote: 5,
        likes: 0,
        product_id: 24,
        slug: "robusta-e-persistente"
    },
    {
        title: "Audace, forse per pochi",
        description: "Sapore deciso e arcaico, non per tutti i palati ma chi ama l'affumicato robusto la adorerà. Io l'ho trovata intensa e particolare. Promossa.",
        vote: 4,
        likes: 0,
        product_id: 24,
        slug: "audace-forse-per-pochi"
    },
    // 25 - Meteor Honey Mustard
    {
        title: "Dolce-piccante equilibrato",
        description: "Il Meteor Honey Mustard è bellissimo. Il contrasto miele-mostarda è ben calibrato e il finale leggermente speziato completa perfettamente.",
        vote: 5,
        likes: 0,
        product_id: 25,
        slug: "dolce-piccante-equilibrato"
    },
    {
        title: "Contrasto miele-mostarda riuscito",
        description: "Texture setosa che lega gli ingredienti e un retrogusto lungo e armonico. La spinta della mostarda incrocia il miele in modo avventuroso. Salsa top.",
        vote: 4,
        likes: 0,
        product_id: 25,
        slug: "contrasto-miele-mostarda-riuscito"
    },
    // 26 - Glacier Cola
    {
        title: "Freschezza dissetante",
        description: "La Glacier Cola è fresca e frizzante con quella nota minerale particolare. Perfetta per accompagnare piatti intensi senza appesantire.",
        vote: 4,
        likes: 0,
        product_id: 26,
        slug: "freschezza-dissetante"
    },
    {
        title: "Frizzante e pulita",
        description: "Dolcezza nitida e finale pulito che lascia la bocca dissetata. Crea un bel contrasto con i piatti più intensi. Una cola che evoca aria pura.",
        vote: 4,
        likes: 0,
        product_id: 26,
        slug: "frizzante-e-pulita"
    },
    // 27 - Jurassic Lemon Soda
    {
        title: "Agrume brillante",
        description: "La Jurassic Lemon Soda è brillante e leggera. Un contrappunto acidulo che pulisce il palato tra i morsi. Esattamente quello che serve!",
        vote: 4,
        likes: 0,
        product_id: 27,
        slug: "agrume-brillante"
    },
    {
        title: "Scintilla frizzante",
        description: "La carica di limone ricorda aria primordiale ed è perfetta con i sapori intensi. Acidula e leggera, mette in evidenza il carattere del pasto. Dissetante.",
        vote: 5,
        likes: 0,
        product_id: 27,
        slug: "scintilla-frizzante"
    },
    {
        title: "Leggera e rinfrescante",
        description: "Bella fresca, non troppo dolce, con quel taglio acidulo che pulisce il palato. Accompagna benissimo i burger più ricchi. La mia bibita preferita del menu.",
        vote: 4,
        likes: 0,
        product_id: 27,
        slug: "leggera-e-rinfrescante"
    },
    // 28 - Triassic Mango Shake
    {
        title: "Tropicale e vellutato",
        description: "Il Triassic Mango Shake è cremoso e ricco. Il mango maturo richiama frutti antichi e climi lussureggianti. Perfetto per una pausa dolce.",
        vote: 5,
        likes: 0,
        product_id: 28,
        slug: "tropicale-e-vellutato"
    },
    {
        title: "Una giungla in un bicchiere",
        description: "Cremosità intensa che avvolge il palato e mango maturo protagonista. Mi ha trasportato in una giungla primordiale. Dolce ma non stucchevole. Ottimo.",
        vote: 5,
        likes: 0,
        product_id: 28,
        slug: "una-giungla-in-un-bicchiere"
    },
    // 29 - Bronto Vanilla Milk
    {
        title: "Conforto cremoso",
        description: "Il Bronto Vanilla Milk è avvolgente e rassicurante. La vaniglia calda ha un sapore di erbe dolci antiche. Perfetto per addolcire il pomeriggio.",
        vote: 4,
        likes: 0,
        product_id: 29,
        slug: "conforto-cremoso"
    },
    {
        title: "Morbido e rassicurante",
        description: "Corpulenza che nutre e calma il palato, equilibrio sottile tra dolcezza e morbidezza. Sa di comfort giurassico. Una coccola in formato bevanda.",
        vote: 4,
        likes: 0,
        product_id: 29,
        slug: "morbido-e-rassicurante"
    },
    // 30 - Cretaceous Iced Tea
    {
        title: "Erbaceo e dissetante",
        description: "Il Cretaceous Iced Tea è fresco e pulito. L'erba selvatica si sente bene e l'acidità è delicata. Un tè freddo che sa di primordiale.",
        vote: 4,
        likes: 0,
        product_id: 30,
        slug: "erbaceo-e-dissetante"
    },
    {
        title: "Brezza primordiale",
        description: "Profilo erbaceo e fresco, con una leggera acidità che richiama campi di erbe selvatiche. Freschezza lunga che sostiene il pasto senza coprirlo. Bello pulito.",
        vote: 5,
        likes: 0,
        product_id: 30,
        slug: "brezza-primordiale"
    },
    {
        title: "Pausa dissetante perfetta",
        description: "Delicato e pulito, ideale tra un boccone e l'altro dei piatti più saporiti. Non troppo dolce, esattamente come piace a me. Promosso.",
        vote: 4,
        likes: 0,
        product_id: 30,
        slug: "pausa-dissetante-perfetta"
    },
    // 31 - Fossil Cookie Pie
    {
        title: "Burroso e caramellato",
        description: "Il Fossil Cookie Pie è avvolgente e fragrante. La componente croccante si intreccia perfettamente con un cuore dolce. Antichi racconti gastronomici.",
        vote: 5,
        likes: 0,
        product_id: 31,
        slug: "burroso-e-caramellato"
    },
    {
        title: "Strati di dolcezza fragrante",
        description: "Ogni morso invita a esplorare strati di dolcezza. Morbidezza che ricorda pietre antiche e una crosta croccante. Un finale goloso che mette d'accordo tutti.",
        vote: 4,
        likes: 0,
        product_id: 31,
        slug: "strati-di-dolcezza-fragrante"
    },
    // 32 - Meteor Choco Sundae
    {
        title: "Cioccolato profondo",
        description: "Il Meteor Choco Sundae è ricco e intenso. Le scaglie di cioccolato e il finale leggermente tostato lo rendono memorabile. Un'esperienza cosmica!",
        vote: 5,
        likes: 0,
        product_id: 32,
        slug: "cioccolato-profondo"
    },
    {
        title: "Impatto cosmico di cacao",
        description: "Consistenza cremosa intrecciata a scaglie di cioccolato e a un finale tostato. Da gustare lentamente. Dolcezza intensa che richiama meteoriti di cacao.",
        vote: 5,
        likes: 0,
        product_id: 32,
        slug: "impatto-cosmico-di-cacao"
    },
    {
        title: "Per veri amanti del cioccolato",
        description: "Ricco e profondo, forse impegnativo per chi cerca qualcosa di leggero. Ma se ami il cioccolato vero questo sundae è una festa. Goloso al punto giusto.",
        vote: 4,
        likes: 0,
        product_id: 32,
        slug: "per-veri-amanti-del-cioccolato"
    },
    // 33 - Amber Caramel Muffin
    {
        title: "Dorato e caramellato",
        description: "L'Amber Caramel Muffin è soffice e dorato. La dolcezza è bilanciata e il retrogusto di zucchero bruciato la rende speciale. Comfort food!",
        vote: 4,
        likes: 0,
        product_id: 33,
        slug: "dorato-e-caramellato"
    },
    {
        title: "Soffice e appagante",
        description: "Sentori di ambra dolce e una texture soffice che si scioglie. Retrogusto di zucchero bruciato che richiama foreste di resina antica. Un piacere caldo.",
        vote: 5,
        likes: 0,
        product_id: 33,
        slug: "soffice-e-appagante"
    },
    // 34 - Jurassic Brownie Bite
    {
        title: "Intenso e umido",
        description: "Il Jurassic Brownie Bite è cioccolatoso e deciso. La densità ricorda lava solidificata e il cuore umido rilascia aromi tostati. Bellissimo!",
        vote: 5,
        likes: 0,
        product_id: 34,
        slug: "intenso-e-umido"
    },
    {
        title: "Densità da lava solidificata",
        description: "Piccolo ma con un carattere enorme: cuore umido, aromi tostati e dolcezza intensa. Chiude il pasto con un impatto caldo e seducente. Da provare assolutamente.",
        vote: 5,
        likes: 0,
        product_id: 34,
        slug: "densita-da-lava-solidificata"
    },
    // 35 - Veloci Cream Cup
    {
        title: "Cremoso e delicato",
        description: "La Veloci Cream Cup è morbida e raffinata. L'equilibrio gentile tra dolcezza e freschezza la rende perfetta. Un piccolo interludio elegante.",
        vote: 4,
        likes: 0,
        product_id: 35,
        slug: "cremoso-e-delicato"
    },
    {
        title: "Interludio raffinato",
        description: "Texture vellutata che si scioglie lasciando note floreali e vanigliate. Un finale leggero e sofisticato, perfetto dopo un pasto importante. Elegante.",
        vote: 4,
        likes: 0,
        product_id: 35,
        slug: "interludio-raffinato"
    },
    {
        title: "Leggerezza antica",
        description: "Dolcezza e freschezza in perfetto equilibrio, senza appesantire. Una coppetta delicata che chiude in bellezza. La mia scelta dolce quando voglio qualcosa di lieve.",
        vote: 5,
        likes: 0,
        product_id: 35,
        slug: "leggerezza-antica"
    },
    // 36 - Predator Combo Menu
    {
        title: "Menu avventuroso",
        description: "Il Predator Combo Menu è vario e completo. Ogni elemento racconta una storia e i contrasti di intensità sono ben calibrati. Un'avventura culinaria!",
        vote: 5,
        likes: 0,
        product_id: 36,
        slug: "menu-avventuroso"
    },
    {
        title: "Dinamico e potente",
        description: "Contrasti di intensità e texture che si susseguono come tappe di un viaggio. Un pasto completo e appagante. Ottimo rapporto qualità-prezzo per chi ha fame.",
        vote: 4,
        likes: 0,
        product_id: 36,
        slug: "dinamico-e-potente"
    },
    // 37 - Volcano Family Menu
    {
        title: "Caldo e accogliente",
        description: "Il Volcano Family Menu è ricco di aromi e conviviale. La progressione di sapori è intensa ma bilanciata. Perfetto per condividere!",
        vote: 4,
        likes: 0,
        product_id: 37,
        slug: "caldo-e-accogliente"
    },
    {
        title: "Perfetto da condividere",
        description: "Un vulcano di sapori con una progressione intensa che soddisfa tutti. Conviviale e abbondante, ideale per una cena in famiglia. Ce n'è per ogni gusto.",
        vote: 5,
        likes: 0,
        product_id: 37,
        slug: "perfetto-da-condividere"
    },
    {
        title: "Conviviale e abbondante",
        description: "Aromi che ricordano strati di lava e spezie antiche, con un senso di rituale primordiale. Abbiamo mangiato tutti benissimo. Lo riprenderemo di sicuro.",
        vote: 4,
        likes: 0,
        product_id: 37,
        slug: "conviviale-e-abbondante"
    },
    // 38 - Explorer Lunch Menu
    {
        title: "Fresco e sorprendente",
        description: "L'Explorer Lunch Menu è elegante e dinamico. Ogni piatto si rincorre con equilibrio tra note saline, erbacee e aromatiche. Un percorso intrigante!",
        vote: 5,
        likes: 0,
        product_id: 38,
        slug: "fresco-e-sorprendente"
    },
    {
        title: "Percorso gustativo elegante",
        description: "Pensato per esplorare sapori diversi con equilibrio. Progressione elegante e dinamica, senza rinunciare all'armonia. Ideale per una pausa pranzo curata.",
        vote: 4,
        likes: 0,
        product_id: 38,
        slug: "percorso-gustativo-elegante"
    },
    // 39 - Campfire Dinner Menu
    {
        title: "Rustico e fumé",
        description: "Il Campfire Dinner Menu evoca un falò nella notte giurassica. Gli aromi di legno bruciato e carne affumicata creano un'atmosfera autenticamente antica.",
        vote: 5,
        likes: 0,
        product_id: 39,
        slug: "rustico-e-fume"
    },
    {
        title: "Una cena sotto le stelle antiche",
        description: "Dettagli aromatici di legni bruciati e carne affumicata, esperienza calda e avvolgente. Come una cena condivisa sotto il cielo di un'era perduta. Magnifico.",
        vote: 5,
        likes: 0,
        product_id: 39,
        slug: "una-cena-sotto-le-stelle-antiche"
    },
    {
        title: "Atmosfera convincente",
        description: "Più di un semplice menu: gli aromi affumicati creano davvero un'atmosfera. Conviviale e ricco, perfetto per una serata rilassata. Mi ha conquistato.",
        vote: 4,
        likes: 0,
        product_id: 39,
        slug: "atmosfera-convincente"
    },
    // 40 - Jurassic Value Menu
    {
        title: "Solido e accessibile",
        description: "Il Jurassic Value Menu è ben bilanciato e autentico. Offre una sequenza gustativa coerente e soddisfacente a un prezzo accessibile. Ottima scelta!",
        vote: 4,
        likes: 0,
        product_id: 40,
        slug: "solido-e-accessibile"
    },
    {
        title: "Completo e rassicurante",
        description: "Bello nella sua semplicità, con un gusto accessibile ma ricco. Un pasto completo con un tocco di antica avventura dietro ogni portata. Ottimo rapporto qualità-prezzo.",
        vote: 5,
        likes: 0,
        product_id: 40,
        slug: "completo-e-rassicurante"
    }
];

export default reviews;
