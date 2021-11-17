exports.up = (knex) => {
  const date = new Date().toISOString()
  return Promise.all([
    knex('movies').insert([
      {name: 'Семь самураев', director: 'Акира Куросава', tags: [1, 3], length: 207, premierDate: date, addedBy: 0},
      {name: 'Телохранитель', director: 'Мик Джексон', tags: [2, 3, 5], length: 129, premierDate: date, addedBy: 0},
      {
        name: 'Жертвоприношение',
        director: 'Андрей Тарковский',
        tags: [3, 4, 7],
        length: 149,
        premierDate: date,
        addedBy: 0
      }
    ])
  ])
}

exports.down = (knex) => {
  return Promise.all([
    knex('movies')
      .where('addedBy', 0)
      .del()
  ])
}
