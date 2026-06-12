# jurassic-pork-sandwich-shop

Il regno dei panini e degli hamburger d'altri tempi. Selezioniamo solo le migliori carni di dinosauri e ingredienti della tradizione per offrirvi un salto nel passato a ogni morso. Gusto primordiale, ricette antiche.

# Endpoints:

- `/products`

  - **GET** `/` = Mostra tutti i products. Restituisce un oggeto con dentro "error" e "result" che è un array di oggetti:

    ```javascript
    {
              "error": null,
              "result": [
                        {
                            "name": "Stego Crunch Burger",
                            "description": "La carne di dinosauro qui è croccante al bordo e densa al centro, con un profilo gustativo terroso, affumicato e pieno. Il sapore richiama la natura dura del Cretaceo, equilibrato tra una succosità carnosa e una profondità minerale molto avvincente. Ogni morso fonde consistenza robusta e calore primordiale, offrendo il piacere strutturato di una carne antica resa moderna dal contrasto croccante‑morbido.",
                            "image": "",
                            "slug": "stego-crunch-burger",
                            "price": 13,
                            "categories": [
                                {
                                    "label": "Burgers",
                                    "slug": "burgers"
                                }
                            ]
                        },
                        {
                            "name": "Bronto Tower Burger",
                            "description": "Una carne di dinosauro dal sapore ampio e mastodontico, con una succosità che avvolge il palato e un retrogusto che ricorda praterie antiche. Questo burger è un concentrato di forza giurassica, dal carattere pieno e deciso, dove la fibra è sanguigna e intensa e l’esperienza gustativa resta lunga e avvolgente. È pensato per chi cerca un sapore primordiale senza compromessi, con un impatto che resta nel tempo.",
                            "image": "",
                            "slug": "bronto-tower-burger",
                            "price": 13.55,
                            "categories": [
                                {
                                    "label": "Burgers",
                                    "slug": "burgers"
                                }
                            ]
                        }
              ]
      }
    ```

    Questo endpoint accetta le seguenti queries:
    - `orderBy` che se usata deve SEMPRE anche aver `order`
        - `orderBy` accetta un valore qualsiasi tra `created_at` `updated_at` `name` `categorylabel`
        - `order` accetta solo `asc` o `desc`

    - `offset` un valore numerico per decidere l'offset dei prodotti da recuperare e.g `offset = 10` ci mostrerà solo i prodotti dal 10 in poi

    - `limit` di default è impostato a 10 ma se passi `limit=5`nella query, ti restituirà solo 5 valori (deve essere un numero e non può essere superiore a 10);

    - `search` stringa di ricerca che può essere passata alla query, controllerà se c'è un valore simile a quello passato nel nome o nella descrizione dell'oggetto

    - `category` stringa di ricerca per categoria, se gli passi ad esempio  `category=bites` lui ti restituirà solo i prodotti di quella categoria 
           - N.B. Il controllo viene fatto sullo slug della categoria, non sul nome, quindi per ora che abbiamo categorie con il label uguale allo slug, nessun problema, ma se mai avessimo categorie con label tipo `Burgers Piccanti`, bisognerà passare invece lo slug `burgers-piccanti`

  - **GET** `/:productSlug` = Mostra un prodotto in particolare individuato dalla slug. Restituisce un oggetto che contiener "error" e "result":

    ```javascript
    {
    "error": null,
    "result": {
      "name": "Stego Crunch Burger",
      "description": "La carne di dinosauro qui è croccante al bordo e densa al centro, con un profilo gustativo terroso, affumicato e pieno. Il sapore richiama la natura dura del Cretaceo, equilibrato tra una succosità carnosa e una profondità minerale molto avvincente. Ogni morso fonde consistenza robusta e calore primordiale, offrendo il piacere strutturato di una carne antica resa moderna dal contrasto croccante‑morbido.",
      "price": 13,
      "image": "",
      "slug": "stego-crunch-burger",
      "categories": [
          {
              "label": "Burgers",
              "slug": "burgers"
          }
      ]
    }
    }
    ```

- `/products/:productSlug/reviews`

  - **GET** `/` = mostra tutte le reviews in db per quel prodotto. Restituisce un oggetto con "error" e "result" che è un array di oggetti:

    ```javascript
    {
    "error": null,
    "result": [
        {
            "slug": "croccantezza-perfetta",
            "title": "Croccantezza perfetta",
            "description": "Lo Stego Crunch Burger vive al suo nome. La croccantezza del bordo combinata con la succosità del centro è un'armonia di contrasti. Davvero bello!",
            "vote": 4,
            "likes": 0,
            "created_at": "2026-06-10T21:11:05.000Z"
        }
    ]
    }
    ```

  - **GET** `/:reviewSlug` = mostra una review singola individuata da reviewSlug per quel prodotto. Restituisce un oggetto con "error" e "result":

    ```javascript
    {
    "error": null,
    "result": {
        "title": "Croccantezza perfetta",
        "description": "Lo Stego Crunch Burger vive al suo nome. La croccantezza del bordo combinata con la succosità del centro è un'armonia di contrasti. Davvero bello!",
        "vote": 4,
        "likes": 0,
        "created_at": "2026-06-10T21:11:05.000Z",
        "slug": "croccantezza-perfetta"
    }
    }
    ```

  - **POST** `/` = Aggiunge una nuova review, devi per forza inserire "title":string, "vote":number intero. Hanno anche "description" e "likes" ma "description" è nullable e "likes" è default 0\. Restituisce se tutto va bene un oggetto con dentro "error" e "result":

    ```javascript
    {
    "error": null,
    "result": 45
    }
    ```

    Dove result è l'insertId della review.

    Se va qualcosa storto restituisce un oggetto con dentro "errors" che è l'array di errori e "result" che è null:

    ```javascript
    {
    "errors": [
        "Mancano delle fields nella review passata al server",
        "Le fields inserite non corrispondono con quelle che si aspetta il db"
    ],
    "result": null
    }
    ```

  - **PATCH** `/:reviewSlug` = Modifica una review per quel prodotto, ricorda sempre "title":string, "vote":number intero, "likes": number Intero, "description": string. Restituisce un oggetto con dentro "error" e "result" che è un array di risposte dal db:

    ```javascript
    {
    "error": null,
    "result": [
        [
            {
                "fieldCount": 0,
                "affectedRows": 1,
                "insertId": 0,
                "info": "Rows matched: 1  Changed: 1  Warnings: 0",
                "serverStatus": 2,
                "warningStatus": 0,
                "changedRows": 1
            },
            null
        ],
        [
            {
                "fieldCount": 0,
                "affectedRows": 1,
                "insertId": 0,
                "info": "Rows matched: 1  Changed: 1  Warnings: 0",
                "serverStatus": 2,
                "warningStatus": 0,
                "changedRows": 1
            },
            null
        ],
        [
            {
                "fieldCount": 0,
                "affectedRows": 0,
                "insertId": 0,
                "info": "Rows matched: 0  Changed: 0  Warnings: 0",
                "serverStatus": 2,
                "warningStatus": 0,
                "changedRows": 0
            },
            null
        ],
        [
            {
                "fieldCount": 0,
                "affectedRows": 0,
                "insertId": 0,
                "info": "Rows matched: 0  Changed: 0  Warnings: 0",
                "serverStatus": 2,
                "warningStatus": 0,
                "changedRows": 0
            },
            null
        ],
        [
            {
                "fieldCount": 0,
                "affectedRows": 0,
                "insertId": 0,
                "info": "Rows matched: 0  Changed: 0  Warnings: 0",
                "serverStatus": 2,
                "warningStatus": 0,
                "changedRows": 0
            },
            null
        ]
    ]
    }
    ```

  - **DELETE** `/:reviewSlug` = distrugge una review per quel prodotto. Restituisce un oggetto "error", "result" se c'è un problema, altrimenti non restituisce contenuto:

    ```javascript
    {
    "error": "Review non trovata",
    "result": null
    }
    ```

- `/categories`

  - **GET** `/` = mostra tutte le categorie in db. Restituisce un oggetto "error" "result" che è un array di oggetti:

    ```javascript
    {
    "error": null,
    "result": [
        {
            "slug": "burgers",
            "label": "Burgers",
            "description": "Selezione di burger con polpette di carne, verdure fresche e salse.",
            "image": ""
        },
        {
            "slug": "bites",
            "label": "Bites",
            "description": "Bocconcini e nuggets di carne, ideali come spuntino o da condividere.",
            "image": ""
        },
        {
            "slug": "wraps",
            "label": "Wraps",
            "description": "Piadine farcite con ingredienti freschi, carne e salse a scelta.",
            "image": ""
        },
        {
            "slug": "sides",
            "label": "Sides",
            "description": "Contorni per accompagnare il pasto: patatine, anelli di cipolla e altro.",
            "image": ""
        },
        {
            "slug": "sauces",
            "label": "Sauces",
            "description": "Salse artigianali disponibili in vari gusti, dalla delicata alla piccante.",
            "image": ""
        },
        {
            "slug": "drinks",
            "label": "Drinks",
            "description": "Bevande fredde e calde: bibite, succhi, milkshake e molto altro.",
            "image": ""
        },
        {
            "slug": "desserts",
            "label": "Desserts",
            "description": "Dolci e sfizi zuccherati per concludere il pasto.",
            "image": ""
        },
        {
            "slug": "menus",
            "label": "Menus",
            "description": "Combinazioni complete con burger, contorno e bevanda a prezzo fisso.",
            "image": ""
        }
    ]
    }
    ```

  - **GET** `/:categorySlug` = mostra la categoria corrispondente alla slug ricevuta. Restituisce un oggetto con "error" e "result":

    ```javascript
    {
    "error": null,
    "result": {
        "slug": "bites",
        "label": "Bites",
        "description": "Bocconcini e nuggets di carne, ideali come spuntino o da condividere.",
        "image": ""
    }
    }
    ```
