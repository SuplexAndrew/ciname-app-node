module.exports = {
  getCinemas: async ({db}) => {
    return db('cinemas').select('*')
  }
}