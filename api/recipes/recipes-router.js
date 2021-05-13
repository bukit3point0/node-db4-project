const router = require('express').Router()
const {checkRecipeId} = require('./recipes-middleware')
const Recipes = require('./recipes-model')

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
    console.log("routeparam", req.params)
    console.log("routebody", req.body)
    const {recipe_id} = req.params

    Recipes.getRecipeById(recipe_id)
    .then(recipe => {
        res.json(recipe)
    })
    .catch(next)
})

module.exports = router