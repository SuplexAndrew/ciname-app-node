exports.up = (knex) =>
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
  });

exports.down = (knex) =>
  knex.schema.dropTable('halls');