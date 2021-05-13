const Recipes = require('./recipes-model')

const checkRecipeId = (req, res, next) => {
    const id = req.params.recipe_id
    Recipes.getRecipeById(id)
    .then(recipe => {
        if(!recipe) {
            res.status(404).json({
                message: `recipe not found`
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json({
            message:err.message
        })
    })
}

module.exports = {
    checkRecipeId
}