function mapReviews(reviews){
    if(!reviews){
        return {error:404, result:null}
    }

    const mappedReviews = reviews.map(review => {
        const image = review.image ? `${process.env.REVIEW_STATIC_PATH}${review.image}` : null

        return {
            title:review.title,
            description:review.description,
            image:image,
            vote:review.vote,
            likes:review.likes
        }
    })

    return mappedReviews;
}

export default mapReviews;