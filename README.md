# jurassic-pork-sandwich-shop
Il regno dei panini e degli hamburger d'altri tempi. Selezioniamo solo le migliori carni di dinosauri e ingredienti della tradizione per offrirvi un salto nel passato a ogni morso. Gusto primordiale, ricette antiche.

# Endpoints:
- /products
    - GET / = Mostra tutti i products
    - GET /:productSlug = Mostra un prodotto in particolare individuato dalla slug

- /products/:productSlug/reviews
    - GET / = mostra tutte le reviews in db per quel prodotto
    - GET /:reviewSlug = mostra una review singola individuata da reviewSlug per quel prodotto
    - POST / = Aggiunge una nuova review, devi per forza inserire "title":string, "vote":number intero. Hanno anche "description" e "likes" ma "description" è nullable e "likes" è default 0
    - PATCH /:reviewSlug = Modifica una review per quel prodotto, ricorda sempre "title":string, "vote":number intero, "likes": number Intero, "description": string
    - DELETE /:reviewSlug = distrugge una review per quel prodotto

- /categories
    - GET / = mostra tutte le categorie in db
    - GET /:categorySlug = mostra la categoria corrispondente alla slug ricevuta