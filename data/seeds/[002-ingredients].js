
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: "Spring Roll Wrappers"}, //1
        {ingredient_name: "Ground Pork"}, //2
        {ingredient_name: "Carrot"}, //3
        {ingredient_name: "Garlic"}, //4
        {ingredient_name: "Salt"}, //5
        {ingredient_name: "Pepper"}, //6
        {ingredient_name: "Cabbage"}, //7
        {ingredient_name: "Egg"}, //8
        {ingredient_name: "Egg White"}, //9
        {ingredient_name: "Egg Yolk"}, //10
        {ingredient_name: "Chicken Breast"}, //11
        {ingredient_name: "Ginger Root"}, //12
        {ingredient_name: "Green Onion"}, //13
        {ingredient_name: "Potato"}, //14
        {ingredient_name: "Onion"}, //15
        {ingredient_name: "Curry Cubes"}, //16
        {ingredient_name: "Vegetable Oil"} //17
      ]);
    });
};
