
export const getAllUserData = async (request, response) => {
    let name = request.query.name;
    try {
        if(name) 
            posts = await review.find({ name: name });
        else 
            posts = await review.find({});
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}