import connection from "../data/db.js";
import categories from "./categories.js";
import reviews from "./reviews.js";

const products = [
    {
        name: "T-Rex Prime Burger",
        description: "Una carne di dinosauro dal sapore profondo e opulento, con note rotonde di selvatico e un finale ferino che ricorda il cuore del Late Jurassic. Ogni morso è un’esplorazione della fibra succosa, con una trama carnosa che parla di bestie preistoriche e territori primordiali. Questo burger mantiene l’equilibrio tra consumabilità e carattere primordiale, restando intenso e memorabile fino all’ultimo morso, come un viaggio nella carne antica.",
        image: "t-rex-prime-burger.webp",
        categories: ["burgers"],
        price: 11.90,
        geological_era: "Late Jurassic",
        slug: "t-rex-prime-burger",
    },
    {
        name: "Raptor Double Smash",
        description: "Carne di dinosauro schiacciata doppia, con un gusto intenso e fulminante che sprigiona note affumicate, selvatiche e leggermente speziate. Il sapore è agile ma imponente, evocando la forza di un raptor in caccia e la texture succosa di una carne vera e primordiale. La consistenza a strati amplifica i toni minerali e terrosi, per un’esperienza carnivora che resta al palato e racconta un’avventura giurassica.",
        image: "raptor-double-smash.webp",
        categories: ["burgers"],
        price: 12.45,
        geological_era: "Late Jurassic",
        slug: "raptor-double-smash",
    },
    {
        name: "Stego Crunch Burger",
        description: "La carne di dinosauro qui è croccante al bordo e densa al centro, con un profilo gustativo terroso, affumicato e pieno. Il sapore richiama la natura dura del Cretaceo, equilibrato tra una succosità carnosa e una profondità minerale molto avvincente. Ogni morso fonde consistenza robusta e calore primordiale, offrendo il piacere strutturato di una carne antica resa moderna dal contrasto croccante‑morbido.",
        image: "stego-crunch-burger.webp",
        categories: ["burgers"],
        price: 13.00,
        geological_era: "Late Jurassic",
        slug: "stego-crunch-burger",
    },
    {
        name: "Bronto Tower Burger",
        description: "Una carne di dinosauro dal sapore ampio e mastodontico, con una succosità che avvolge il palato e un retrogusto che ricorda praterie antiche. Questo burger è un concentrato di forza giurassica, dal carattere pieno e deciso, dove la fibra è sanguigna e intensa e l’esperienza gustativa resta lunga e avvolgente. È pensato per chi cerca un sapore primordiale senza compromessi, con un impatto che resta nel tempo.",
        image: "bronto-tower-burger.webp",
        categories: ["burgers"],
        price: 13.55,
        geological_era: "Late Jurassic",
        slug: "bronto-tower-burger",
    },
    {
        name: "Cretaceous Classic Burger",
        description: "Carne di dinosauro dal profilo gustativo elegante e robusto, con note erbacee, minerali e una persistenza piena che richiama il Cretaceo. Il morso è sapido, caldo e ricco, pensato per chi cerca una vera esperienza carnivora preistorica. L’equilibrio tra succo naturale e dolcezza animale rende questo burger austero e raffinato, come un classico giurassico reinterpretato in chiave contemporanea e studiato per restare memorabile.",
        image: "cretaceous-classic-burger.webp",
        categories: ["burgers"],
        price: 14.10,
        geological_era: "Late Jurassic",
        slug: "cretaceous-classic-burger",
    },
    {
        name: "Raptor Crispy Bites",
        description: "Un sapore paleontologico bellissimo, croccante e sapido con un tocco speziato che evoca un paesaggio mesozoico. Ogni morso è un’esplosione di carattere antico e piacevole, con una consistenza perfettamente bilanciata che mantiene l’energia del tempo primordiale. Questo snack è studiato per chi ama un profilo vivo, interessante e con un richiamo autentico alla storia dei climi antichi.",
        image: "raptor-crispy-bites.webp",
        categories: ["bites"],
        price: 6.90,
        geological_era: "Early Cretaceous",
        slug: "raptor-crispy-bites",
    },
    {
        name: "Triassic Chicken Nuggets",
        description: "Un gusto paleontologico interessante e dolce, con un cuore morbido che richiama fragranze antiche e una croccantezza perfetta. Questi nuggets hanno un sapore che sembra raccontare storie di fossili e terre lontane, con un richiamo di erbe selvatiche e una texture generosa che invita a un consumo rilassato. La loro sequenza di aromi seduce chi cerca un profilo diverso dal solito, personale e memorabile.",
        image: "triassic-chicken-nuggets.wemp",
        categories: ["bites"],
        price: 7.45,
        geological_era: "Early Cretaceous",
        slug: "triassic-chicken-nuggets",
    },
    {
        name: "Compsognathus Mini Bites",
        description: "Piccoli bocconcini dal sapore paleontologico delicato, con un profilo aromatico gentile e una texture armoniosa. Il gusto è fresco e affascinante, come un frammento di giungla antica che racconta un percorso di foglie umide e spezie leggere. Ogni mini morso è studiato per essere appagante e interessante, con una presenza dolce e salata che resta ben definita.",
        image: "compsognathus-mini-bites.webp",
        categories: ["bites"],
        price: 8.00,
        geological_era: "Early Cretaceous",
        slug: "compsognathus-mini-bites",
    },
    {
        name: "Meteor Pop Bites",
        description: "Un gusto paleontologico esplosivo, croccante e sapido, con una sequenza di aromi che rimanda a meteoriti di sapore. Ogni pezzo è interessante e sorprendente, con una profondità che si sviluppa tra note tostate e un’eco speziata capace di evocare il vento preistorico. Questo snack è pensato per chi vuole un’esperienza avvolgente, lunga e diversa dal solito.",
        image: "meteor-pop-bites.webp",
        categories: ["bites"],
        price: 8.55,
        geological_era: "Early Cretaceous",
        slug: "meteor-pop-bites",
    },
    {
        name: "Jurassic Pepper Bites",
        description: "Note pepate e selvagge si uniscono a un carattere paleontologico deciso, con un finale intenso e profondo. Queste bites raccontano una storia di territori antichi e sapori forti, con una punta piccante ben calibrata che si appoggia su una base minerale e rustica. La combinazione di aromi ricorda i cieli aperti e le steppe di un’era remota, restando persistente e intrigante.",
        image: "jurassic-pepper-bites.webp",
        categories: ["bites"],
        price: 9.10,
        geological_era: "Early Cretaceous",
        slug: "jurassic-pepper-bites",
    },
    {
        name: "Ptero Fresh Wrap",
        description: "Un sapore paleontologico fresco e verde, con note vegetali che richiamano brezze giurassiche e una chiusura cremosa che avvolge senza appesantire. Il risultato è bello e avvolgente, con un equilibrio gentile e interessante che rimane al palato. Questo wrap punta sulla naturalezza antica delle verdure e sulla delicatezza del condimento, per un’esperienza leggera ma profonda.",
        image: "ptero-fresh-wrap.webp",
        categories: ["wraps"],
        price: 8.40,
        geological_era: "Middle Jurassic",
        slug: "ptero-fresh-wrap",
    },
    {
        name: "Savanna Smoke Wrap",
        description: "Un gusto paleontologico affumicato e terroso, con una sensazione calda che richiama una savana antica e un fondo erbaceo che ne allunga la persistenza. Il profilo è bello e intrigante, perfetto per chi ama i sapori profondi e desidera una costruzione gustativa intensa ma equilibrata. Il wrap unisce materia e aroma in un’esperienza che sa di legno, terra e avventure preistoriche.",
        image: "svanna-smoke-wrap.webp",
        categories: ["wraps"],
        price: 8.95,
        geological_era: "Middle Jurassic",
        slug: "savanna-smoke-wrap",
    },
    {
        name: "Fossil Ranch Wrap",
        description: "Un sapore paleontologico ricco e cremoso, con una profondità che ricorda un ranch preistorico e un equilibrio morbido tra affumicato, verde e dolcezza naturale. Questa combinazione crea un’esperienza lunga e appagante, dove gli aromi si evolvono lentamente e il gusto rimane avvolgente. È un wrap costruito per chi vuole un profilo pieno e ben sfaccettato.",
        image: "fossil-ranch-wrap.webp",
        categories: ["wraps"],
        price: 9.50,
        geological_era: "Middle Jurassic",
        slug: "fossil-ranch-wrap",
    },
    {
        name: "Volcanic Spicy Wrap",
        description: "Un profilo paleontologico vulcanico e speziato, con una scarica di calore che risveglia i sensi e una base aromatica profonda che rimane al palato. Il gusto è bello e potente, con un carattere unico e sorprendente, come un’eruzione di spezie antiche che avvolge il wrap. Questa proposta è pensata per chi cerca un’esperienza intensa, calda e memorabile.",
        image: "volcanic-spicy-wrap.webp",
        categories: ["wraps"],
        price: 10.05,
        geological_era: "Middle Jurassic",
        slug: "volcanic-spicy-wrap",
    },
    {
        name: "Herbivore Balance Wrap",
        description: "Un sapore paleontologico equilibrato e fresco, con note erbacee e una morbidezza gentile che raccontano un paesaggio verde e primordiale. È bello e raffinato, pensato per chi cerca un profilo naturale e armonioso, con una costruzione gustativa che valorizza ingredienti in sintonia. Questo wrap punta sulla leggerezza antica ma mantiene una profondità sorprendente.",
        image: "herbivore-balance-wrap.webp",
        categories: ["wraps"],
        price: 10.60,
        geological_era: "Middle Jurassic",
        slug: "herbivore-balance-wrap",
    },
    {
        name: "Lava Fries",
        description: "Queste patatine hanno un sapore paleontologico sorprendente, con una croccantezza calda e un retrogusto leggermente fumé. Il profilo è bello e minerale, come lava antica che si solidifica in sapore, e la sensazione croccante apre una sequenza gustativa che rimane lunga e avvolgente. È un contorno pensato per chi cerca un tono rustico, con un richiamo antico ma moderno al tempo stesso.",
        image: "lava-fries.webp",
        categories: ["sides"],
        price: 4.50,
        geological_era: "Late Cretaceous",
        slug: "lava-fries",
    },
    {
        name: "Dino Onion Rings",
        description: "Il sapore paleontologico è dolce e rotondo, con una croccantezza avvolgente e una nota leggermente affumicata che richiama una foresta antica. Ogni anello racconta un’idea di fossile gustoso e ben bilanciato, con una componente soffice all’interno che contrasta perfettamente con l’esterno croccante. È un accompagnamento studiato per aggiungere profondità e comfort al piatto.",
        image: "dino-onion-rings.webp",
        categories: ["sides"],
        price: 5.05,
        geological_era: "Late Cretaceous",
        slug: "dino-onion-rings",
    },
    {
        name: "Canyon Potato Wedges",
        description: "Queste wedges esprimono un sapore paleontologico rustico e minerale, con un cuore morbido e un’esterno croccante. Il gusto è interessante e bello, come un canyon scavato dal tempo, con un equilibrio tra sapidità e dolcezza del tubero che rimanda a strati rocciosi. Sono pensate per durare al palato e per dare una sensazione di terra antica e sostanziosa.",
        image: "canyon-potato-wedges.webp",
        categories: ["sides"],
        price: 5.60,
        geological_era: "Late Cretaceous",
        slug: "canyon-potato-wedges",
    },
    {
        name: "Jurassic Coleslaw Cup",
        description: "Una freschezza paleontologica croccante e naturale, con verdure luminose e un condimento che richiama clima primordiale. Il risultato è bello, leggero e sorprendentemente armonico, con una nota acidula che bilancia perfettamente la croccantezza vegetale. È una componente studiata per offire un contrasto vivo e pulito, capace di aggiungere energia e carattere a ogni piatto.",
        image: "jurassic-coleslaw-cup.webp",
        categories: ["sides"],
        price: 6.15,
        geological_era: "Late Cretaceous",
        slug: "jurassic-coleslaw-cup",
    },
    {
        name: "Cretaceous Corn Bites",
        description: "Un sapore paleontologico dolce e terroso, con una texture morbida che richiama grani antichi. Questo contorno è interessante per la sua dolcezza naturale e il profilo goloso, capace di portare al piatto una sensazione di campo arcaico. Le note di mais si ampliano in un finale avvolgente, rendendolo piacevole e originale insieme a un tocco di calore e tradizione.",
        image: "cretaceous-corn-bites.webp",
        categories: ["sides"],
        price: 6.70,
        geological_era: "Late Cretaceous",
        slug: "cretaceous-corn-bites",
    },
    {
        name: "Amber BBQ Sauce",
        description: "Una salsa dal gusto paleontologico ambrato, con note caramellate e affumicate che sembrano intrappolare il tempo. Il sapore è bello e profondo, perfetto per arricchire ogni piatto, con una corposità bilanciata che non sovrasta ma amplifica la carne e i contorni. La complessità della salsa ricorda resine antiche e arie di bosco, regalando una sensazione calda e persistente.",
        image: "amber-bbq-sauce.webp",
        categories: ["sauces"],
        price: 1.50,
        geological_era: "Mesozoic Blend",
        slug: "amber-bbq-sauce",
    },
    {
        name: "Raptor Hot Sauce",
        description: "Una salsa piccante con un profilo paleontologico feroce, capace di sprigionare un calore deciso e un’irresistibile profondità. Il sapore è interessante e bello per chi vuole una scossa audace, con note speziate che si sviluppano lentamente e una componente affumicata che ricorda incendi antichi. È una salsa concepita per chi cerca intensità e carattere in ogni assaggio.",
        image: "",
        categories: ["sauces"],
        price: 2.05,
        geological_era: "Mesozoic Blend",
        slug: "raptor-hot-sauce",
    },
    {
        name: "Fossil Mayo Sauce",
        description: "Una crema dal sapore paleontologico morbido e vellutato, con un retrogusto delicato che ricorda fossili avvolti in crema. È bella e avvolgente, ideale per bilanciare sapori intensi, con una consistenza setosa che ne fa un accompagnamento versatile. La salsa regala una sensazione di terra umida e roccia soffice, perfetta per smorzare note forti e conferire un tocco familiare.",
        image: "",
        categories: ["sauces"],
        price: 2.60,
        geological_era: "Mesozoic Blend",
        slug: "fossil-mayo-sauce",
    },
    {
        name: "Smoky Tar Sauce",
        description: "Una salsa dal gusto paleontologico affumicato e robusto, con una nota tar-like che aggiunge profondità e un richiamo arcaico. Il profilo è bello e deciso, un tocco antico per i tuoi piatti, con una persistenza lunga e un contrasto tra dolce e affumicato che rimane al palato. È studiata per chi cerca un sapore audace e ricco, con una trama gustativa complessa.",
        image: "",
        categories: ["sauces"],
        price: 3.15,
        geological_era: "Mesozoic Blend",
        slug: "smoky-tar-sauce",
    },
    {
        name: "Meteor Honey Mustard",
        description: "Un sapore paleontologico dolce-piccante, con un miele antico che incrocia la spinta vivace della mostarda e un finale leggermente speziato. Il risultato è bello e interessante, con un contrasto che rimane nel palato e una texture setosa che lega gli ingredienti. Questa salsa è perfetta per chi desidera una nota dolce e avventurosa, con un retrogusto lungo e armonico.",
        image: "",
        categories: ["sauces"],
        price: 3.70,
        geological_era: "Mesozoic Blend",
        slug: "meteor-honey-mustard",
    },
    {
        name: "Glacier Cola",
        description: "Una bevanda dal profilo paleontologico fresco e frizzante, con una dolcezza nitida e una nota minerale come ghiacciai eterni. Il sapore è bello e sorprendente, ideale per rinfrescare l’esperienza e per creare un contrasto leggero con i piatti più intensi. È pensata per evocare aria pura e paesaggi antichi, con un finale pulito che lascia la bocca dissetata e pronta per il morso successivo.",
        image: "",
        categories: ["drinks"],
        price: 3.20,
        geological_era: "Quaternary Service",
        slug: "glacier-cola",
    },
    {
        name: "Jurassic Lemon Soda",
        description: "Una soda dal gusto paleontologico agrumato e brillante, con una carica di limone che ricorda aria primordiale. È bella e leggera, perfetta per accompagnare sapori intensi, e si comporta come un contrappunto acidulo che pulisce il palato. Questa bevanda sa di spazio aperto e vegetazione antica, con una scintilla frizzante che mette in evidenza il carattere del pasto.",
        image: "",
        categories: ["drinks"],
        price: 3.75,
        geological_era: "Quaternary Service",
        slug: "jurassic-lemon-soda",
    },
    {
        name: "Triassic Mango Shake",
        description: "Un sapore paleontologico tropicale e vellutato, con mango maturo che richiama frutti antichi e climi lussureggianti. Il risultato è bello e ricco, perfetto per una pausa dolce, con una cremosità intensa che avvolge il palato. Questa bevanda è pensata per trasportare chi la prova in una giungla primordiale, dove il dolce si fonde con un’energia calda e sensuale.",
        image: "",
        categories: ["drinks"],
        price: 4.30,
        geological_era: "Quaternary Service",
        slug: "triassic-mango-shake",
    },
    {
        name: "Bronto Vanilla Milk",
        description: "Una bevanda dal gusto paleontologico cremoso e avvolgente, con vaniglia calda che sa di erbe dolci antiche. È bella e rassicurante, ideale per chi ama le note morbide, con una corpulenza che nutre e calma il palato. Questo drink parla di comfort giurassico e di tradizione antica, con un equilibrio sottile tra dolcezza e morbidezza che resta piacevole.",
        image: "",
        categories: ["drinks"],
        price: 4.85,
        geological_era: "Quaternary Service",
        slug: "bronto-vanilla-milk",
    },
    {
        name: "Cretaceous Iced Tea",
        description: "Un tè freddo dal profilo paleontologico erbaceo e fresco, con una leggera acidità che richiama campi di erbe selvatiche. Il sapore è bello e pulito, perfetto per una pausa dissetante e per accompagnare piatti saporiti. È pensato per evocare una brezza primordiale tra piante antiche, con una freschezza lunga e una delicatezza che non copre ma sostiene l’intero pasto.",
        image: "",
        categories: ["drinks"],
        price: 5.40,
        geological_era: "Quaternary Service",
        slug: "cretaceous-iced-tea",
    },
    {
        name: "Fossil Cookie Pie",
        description: "Un dolce dal sapore paleontologico burroso e caramellato, con una morbidezza che ricorda le pietre antiche. È bello e avvolgente, ideale per chi cerca un finale goloso, con una componente croccante che si intreccia a un cuore dolce e avvolgente. Ogni morso è un invito a esplorare strati di dolcezza fragrante e a ritrovare un’atmosfera ricca di antichi racconti gastronomici.",
        image: "",
        categories: ["desserts"],
        price: 4.90,
        geological_era: "Sweet Cretaceous",
        slug: "fossil-cookie-pie",
    },
    {
        name: "Meteor Choco Sundae",
        description: "Un dessert dal gusto paleontologico cioccolatoso e profondo, con una dolcezza intensa che richiama meteoriti di cacao. Il profilo è bello e ricco, perfetto per una pausa golosa, con una consistenza cremosa che si intreccia a scaglie di cioccolato e a un finale leggermente tostato. È un’esperienza da esplorare lentamente, capace di evocare l’energia di un impatto cosmico trasformato in dolcezza.",
        image: "",
        categories: ["desserts"],
        price: 5.45,
        geological_era: "Sweet Cretaceous",
        slug: "meteor-choco-sundae",
    },
    {
        name: "Amber Caramel Muffin",
        description: "Un muffin dal sapore paleontologico dorato e caramellato, con sentori di ambra dolce e una texture soffice. È bello e appagante, ideale per un momento di piacere, con un retrogusto di zucchero bruciato e una dolcezza bilanciata che richiama foreste di resina antica. Questo dessert è pensato per chi desidera un finale avvolgente, caldo e confortevole.",
        image: "",
        categories: ["desserts"],
        price: 6.00,
        geological_era: "Sweet Cretaceous",
        slug: "amber-caramel-muffin",
    },
    {
        name: "Jurassic Brownie Bite",
        description: "Un morso dal sapore paleontologico intenso e cioccolatoso, con una consistenza densa che ricorda lava solidificata. È bello e deciso, perfetto per gli amanti del cioccolato profondo, con un cuore umido che rilascia aromi tostati e una dolcezza intensa. Questo piccolo dessert ha carattere e personalità, capace di chiudere il pasto con un impatto caldo e seducente.",
        image: "",
        categories: ["desserts"],
        price: 6.55,
        geological_era: "Sweet Cretaceous",
        slug: "jurassic-brownie-bite",
    },
    {
        name: "Veloci Cream Cup",
        description: "Una coppetta dal gusto paleontologico cremoso e delicato, con un equilibrio gentile tra dolcezza e freschezza. Il profilo è bello e morbido, ottimo per chi cerca un finale leggero, con una texture vellutata che si scioglie e lascia una traccia di note floreali e vanigliate. Questo dessert è un piccolo interludio raffinato, capace di portare una sensazione di leggerezza antica e sofisticata.",
        image: "",
        categories: ["desserts"],
        price: 7.10,
        geological_era: "Sweet Cretaceous",
        slug: "veloci-cream-cup",
    },
    {
        name: "Predator Combo Menu",
        description: "Un menu dal profilo paleontologico vario e completo, con sapori che insieme evocano una caccia antica. Ogni elemento è bello e interessante, studiato per offrire un’esperienza gustativa avventurosa, con contrasti di intensità e texture che si susseguono come tappe di un viaggio nella natura primordiale. È pensato per chi desidera un pasto dinamico e potente, capace di raccontare territori perduti.",
        image: "",
        categories: ["menus"],
        price: 12.90,
        geological_era: "Service Era",
        slug: "predator-combo-menu",
    },
    {
        name: "Volcano Family Menu",
        description: "Un menu dal gusto paleontologico caldo e accogliente, ricco di aromi che ricordano strati di lava e spezie antiche. È bello e conviviale, perfetto per condividere un pasto intenso, con sapori avvolgenti e un ritmo gustativo pensato per soddisfare tutti. Questo menu è costruito come un vulcano di sapori, con una progressione intensa che regala conforto e un senso di rituale primordiale.",
        image: "",
        categories: ["menus"],
        price: 13.45,
        geological_era: "Service Era",
        slug: "volcano-family-menu",
    },
    {
        name: "Explorer Lunch Menu",
        description: "Un menu dal carattere paleontologico fresco e avventuroso, costruito per esplorare sapori diversi con equilibrio. È bello e sorprendente, ideale per una pausa con spirito da esploratore, con piatti che si rincorrono tra note saline, erbacee e aromatiche. Il risultato è una progressione elegante e dinamica, pensata per chi vuole scoprire un percorso gustativo intrigante senza rinunciare all’armonia.",
        image: "",
        categories: ["menus"],
        price: 14.00,
        geological_era: "Service Era",
        slug: "explorer-lunch-menu",
    },
    {
        name: "Campfire Dinner Menu",
        description: "Un menu dal profilo paleontologico rustico e fumé, con aromi che rimandano a un falò nella notte giurassica. È bello e interessante, pensato per chi ama la convivialità antica, con dettagli aromatici che evocano legni bruciati e carne affumicata. Ogni piatto è costruito per creare un’esperienza calda e avvolgente, come una cena condivisa sotto il cielo di un’era perduta.",
        image: "",
        categories: ["menus"],
        price: 14.55,
        geological_era: "Service Era",
        slug: "campfire-dinner-menu",
    },
    {
        name: "Jurassic Value Menu",
        description: "Un menu dal sapore paleontologico solido e piacevole, con elementi ben bilanciati e un carattere autentico. È bello nella sua semplicità, con un gusto che rimane accessibile ma ricco, offrendo una sequenza gustativa coerente e soddisfacente. Questo menu è pensato per chi vuole un pasto completo e rassicurante, con un tocco di antica avventura nascosto dietro ogni portata.",
        image: "",
        categories: ["menus"],
        price: 15.10,
        geological_era: "Service Era",
        slug: "jurassic-value-menu",
    },
];
async function insertIntoDB(){
    const insertQuery = `
    INSERT INTO products(name, description, image, price, geological_era, slug)
    VALUES (?, ?, ?, ?, ?, ?);`
    for(const product of products){
        await connection.execute(insertQuery, [product.name, product.description, product.image, product.price, product.geological_era, product.slug]);
    }
    const categoryQuery = `
    INSERT INTO categories (slug, label, description, image)
    VALUES (?, ?, ?, ?);`
    for(const category of categories){
        await connection.execute(categoryQuery, [category.slug, category.label, category.description, category.image]);
    }
    const linkQuery = `
    INSERT INTO category_product(product_id, category_id)
    VALUES(?, ?);
    `
    const selectCategories = `
    SELECT c.id, c.slug
    FROM categories as c;`

    const selectProducts = `
    SELECT p.id, p.slug
    FROM products as p;`

    const [dbProducts] = await connection.execute(selectProducts);
    const [dbCategories] = await connection.execute(selectCategories);

    console.log(dbProducts);
    for(const product of products){
        const connectedCategoryId = dbCategories.find(category => product.categories.includes(category.slug))?.id;
        const connectedProductId = dbProducts.find(dbProduct => dbProduct.slug === product.slug)?.id;
        if(connectedCategoryId && connectedProductId){
            await connection.execute(linkQuery, [connectedProductId, connectedCategoryId]);
        }
    }
    const insertReviewQuery=`
    INSERT INTO reviews(title, description, vote, likes, product_id, slug)
    VALUES (?, ?, ?, ?, ?, ?)
    `
    for(const review of reviews){
        await connection.execute(insertReviewQuery, [review.title, review.description, review.vote, review.likes, review.product_id, review.slug]);
    }

    connection.end();
}

await insertIntoDB();
export default products;
