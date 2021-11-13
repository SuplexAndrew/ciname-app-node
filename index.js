const app = require('express')()
const knex = require('knex')
const config = require('./knexfile').development.connect
const database = knex(config)

app.get('/', async(req, res) => {
  res.send(await database('movies').select('*'))
})

app.listen(3005, () => console.log('started'))