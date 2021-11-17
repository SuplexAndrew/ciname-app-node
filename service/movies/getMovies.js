
module.exports = {
  getMovies: async ({db}) => {
    return db('movies').select('*')
  }
}