
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {
          quantity: "2 lbs",
          step_id: "1",
          ingredient_id: "2"
        },
        {
          quantity: "Half a head",
          step_id: "1",
          ingredient_id: "7"
        },
        {
          quantity: "1 lb",
          step_id: "1",
          ingredient_id: "3"
        },
        {
          quantity: "4 cloves, chopped",
          step_id: "1",
          ingredient_id: "4"
        },
        {
          quantity: "",
          step_id: "1",
          ingredient_id: "5"
        },
        {
          quantity: "",
          step_id: "1",
          ingredient_id: "6"
        },
        {
          quantity: "2 packages (25pk)",
          step_id: "3",
          ingredient_id: "1"
        },
        {
          quantity: "4",
          step_id: "5",
          ingredient_id: "10"
        },
        {
          quantity: "2-3 cups",
          step_id: "6",
          ingredient_id: "17"
        },
        {
          quantity: "1 lb",
          step_id: "9",
          ingredient_id: "11"
        },
        {
          quantity: "1/2 of a big root",
          step_id: "10",
          ingredient_id: "12"
        },
        {
          quantity: "6-8",
          step_id: "10",
          ingredient_id: "13"
        },
        {
          quantity: "",
          step_id: "10",
          ingredient_id: "5"
        },
        {
          quantity: "3 breasts",
          step_id: "13",
          ingredient_id: "11"
        },
        {
          quantity: "1 lb",
          step_id: "13",
          ingredient_id: "3"
        },
        {
          quantity: "1.5 lb",
          step_id: "13",
          ingredient_id: "14"
        },
        {
          quantity: "1.5",
          step_id: "13",
          ingredient_id: "15"
        },
        {
          quantity: "2 tbsp",
          step_id: "14",
          ingredient_id: "17"
        },
        {
          quantity: "1 pack",
          step_id: "16",
          ingredient_id: "16"
        }
      ]);
    });
};
