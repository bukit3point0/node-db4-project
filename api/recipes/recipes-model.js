const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const id = await db('recipes')
        .select('recipe_id')
        .where({'recipe_id': recipe_id})
        .first()

    const recipe = await db('recipes as r')
    // return db('recipes as r')
    .select(
        'r.recipe_id', 
        'r.recipe_name', 
        'r.created_at',
        's.step_id',
        's.step_number', 
        's.step_instructions', 
        'si.quantity', 
        's.step_id', 
        'i.ingredient_name',
        'i.ingredient_id'
    )
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .where('r.recipe_id', id.recipe_id)
    .orderBy('s.step_number')

    console.log(`end me forever ${recipe.step_number}`)

    const addIngredients = recipe.reduce((acc, step) => {
        const {ingredient_id, quantity} = step
        if (acc[step.step_number]) {
            acc[step.step_number].ingredients.push({ingredient_id, quantity})
        } else {
            if (step.ingredient_id === null) {
                acc[step.step_number] = {step_id: step.step_id, ingredients: []}
            } else {
                acc[step.step_number] = {step_id: step.step_id, ingredients: [{ingredient_id, quantity}]}
            }
        }
        return acc
    }, {})

    const addSteps = recipe.reduce((acc, step) => {
        const {step_number, step_instructions} = step
        if (acc[step.recipe_name]) {
            acc[step.recipe_name].steps.push({
                step_number,
                step_instructions,
                ingredients: addIngredients
            })
        } else {
            if (step.step_id !== null) {
                acc[step.recipe_name] = {recipe_name: step.recipe_name, created_at: step.created_at, steps: []}
            } else {
                acc[step.recipe_name] = {
                    recipe_name: step.recipe_name, 
                    created_at: step.created_at, 
                    steps: [{
                            step_number,
                            step_instructions,
                            ingredients: addIngredients
                    }]
                }
            }
        }
        return acc
    }, {})

    return addSteps
}

module.exports = {getRecipeById}