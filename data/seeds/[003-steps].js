
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: 1,
          step_instructions: "Cook the ground pork, cabbage,  carrots, and garlic in a pot with salt and pepper to taste.",
          recipe_id: 1
        },
        {
          step_number: 2,
          step_instructions: "Drain the pork mix and set to the side to cool.",
          recipe_id: 1
        },
        {
          step_number: 3,
          step_instructions: "Split up the spring roll wrappers.",
          recipe_id: 1
        },
        {
          step_number: 4,
          step_instructions: "Scoop approximately two spoonfuls of the pork mix into the middle of the egg and roll tightly like a burrito until you have about .75 inch of the last corner left out.",
          recipe_id: 1
        },
        {
          step_number: 5,
          step_instructions: "Brush the remaining corner with egg yolk and seal tightly.",
          recipe_id: 1
        },
        {
          step_number: 6,
          step_instructions: "In a pot of hot oil, test a small piece of spring roll wrapper. If it fizzes and cooks immediately, you're ready to cook your spring rolls.",
          recipe_id: 1
        },
        {
          step_number: 7,
          step_instructions: "Cook about four spring rolls at a time until they are crispy and medium brown - they will continue to get darker after coming out of the oil.",
          recipe_id: 1
        },
        {
          step_number: 8,
          step_instructions: "Let spring rolls drain on a paper towel before eating.",
          recipe_id: 1
        },
        {
          step_number: 2, //9
          step_instructions: "Cut the chicken breast into approximately one inch cubes",
          recipe_id: 2
        },
        {
          step_number: 1, //10
          step_instructions: "Cut the ginger into small pieces and the ginger shredded into small slivers. Coat the onion and ginger together in salt and let marinate in the refrigerator for an hour.",
          recipe_id: 2
        },
        {
          step_number: 3, //11
          step_instructions: "Boil the chicken until completely cooked. Drain.",
          recipe_id: 2
        },
        {
          step_number: 4, //12
          step_instructions: "Mix the chicken with the onion and ginger. Serve hot over rice.",
          recipe_id: 2
        },
        {
          step_number: 1, //13
          step_instructions: "Cut the chicken breast, carrots, and potatoes into approximately one inch cubes and the onion into chunks.",
          recipe_id: 3
        },
        {
          step_number: 2, //14
          step_instructions: "Lightly cook the sides of the chicken in oil, then add the carrots, potatoes, onion, and chopped garlic. Fill the pot about one inch higher than the ingredients. Bring to a boil and then simmer.",
          recipe_id: 3
        },
        {
          step_number: 3, //15
          step_instructions: "Let cook for about 30-40 minutes, until the chicken is cooked.",
          recipe_id: 3
        },
        {
          step_number: 4, //16
          step_instructions: "Add curry cubes into the pot and mix until the curry has mixed completely with the water and become creamy.",
          recipe_id: 3
        },
        {
          step_number: 5, //17
          step_instructions: "Serve hot over rice.",
          recipe_id: 3
        }
      ]);
    });
};
