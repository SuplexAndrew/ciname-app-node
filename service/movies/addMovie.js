module.exports = {
  addMovie: async (movie, {knex, logger}) => {
    console.log(movie)
    const res = await knex('movies').insert(movie)
    logger(res)
  }
}