function incorporateProducts(products) {
    let lastSlug;
    let equalSlugs = [];
    let reducedProducts = [];
    for (let i = 0; i < products.length; i++) {
        let current = products[i];
        if (i === 0) {
            lastSlug = current.slug;
            equalSlugs.push(current);
        }
        else {
            if (lastSlug === current.slug) {
                equalSlugs.push(current);
            }
            else {
                const reducedProduct = reduceProducts(equalSlugs);
                reducedProducts.push(reducedProduct);
                lastSlug = current.slug;
                equalSlugs = [current];
            }
        }
    }
    if (equalSlugs.length !== 0) {
        const reducedProduct = reduceProducts(equalSlugs);
        reducedProducts.push(reducedProduct);
    }

    return mapProducts(reducedProducts);
}

function reduceProducts(products) {
    const reducedProduct = products.reduce((accumulator, currentProduct, currentIndex) => {
        if (currentIndex === 0) {
            currentProduct.categories = [{
                label: currentProduct.categoryLabel,
                slug: currentProduct.categorySlug
            }
            ]
        }
        else {
            currentProduct.categories.push({
                label: currentProduct.categoryLabel,
                slug: currentProduct.categorySlug
            })
        }
        return currentProduct;
    }, {});

    return reducedProduct;
}

function mapProducts(products) {
    const mappedProducts = products.map(product => {
        return {
            name:product.name,
            description:product.description,
            price:parseFloat(product.price),
            image:product.image,
            slug:product.slug,
            categories:product.categories
        };
    });
    return mappedProducts;
}

export default incorporateProducts;