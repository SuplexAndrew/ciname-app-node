exports.up = (knex) => {
  return Promise.all([
    knex.schema.createTable('cinemas', (table) => {
      table.increments('id').primary()
      table.string('city').notNullable()
      table.string('address').notNullable()
    }),

    knex.schema.createTable('tags', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
    }),

    knex.schema.createTable('orders', (table) => {
      table.increments('id').primary()
      table.integer('cinema').notNullable()
      table.integer('hall').notNullable()
      table.integer('row').notNullable()
      table.integer('seat').notNullable()
      table.integer('movie').notNullable()
      table.foreign('cinema').references('id').inTable('cinemas')
      table.foreign('hall').references('id').inTable('halls')
      table.foreign('movie').references('id').inTable('movies')
    }),

    knex.schema.createTable('movies', (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('director').notNullable()
      table.specificType('tags', 'INT[]')
      table.integer('length')
      table.timestamp('premierDate', {useTz: false})
      table.integer('addedBy')
    }),

    knex.schema.createTable('halls', (table) => {
      table.increments('id')
        .primary()
        .comment('Идентификатор');
      table.integer('rowCount')
        .notNullable()
        .comment('Количество рядов');
      table.integer('seatsInRow')
        .notNullable()
        .comment('Мест в ряду');
      table.integer('type')
        .notNullable()
        .comment('Тип зала');
      table.integer('cinema').notNullable()
      table.foreign('cinema').references('id').inTable('cinemas')
    })
  ])
}


exports.down = (knex) => {
  return Promise.all([
    knex.schema.dropTable('orders'),
    knex.schema.dropTable('movies'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('halls'),
    knex.schema.dropTable('cinemas')
  ])
}
