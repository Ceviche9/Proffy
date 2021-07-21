import { Knex } from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('class_schedule', (table: Knex.TableBuilder) => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    // Horário inicial da aula
    table.integer('from').notNullable();
    // Horário final da aula
    table.integer('to').notNullable();

    table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('class_schedule');
}