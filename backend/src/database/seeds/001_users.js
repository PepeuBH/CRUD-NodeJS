/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {name: 'Pedro Talma', email: 'pedrotoledo1717@gmail.com', password: 'pepeubh17'},
    {name: 'Ekko', email: 'ekkinho@gmail.com', password: 'EkkoFoda'},
  ]);
};
