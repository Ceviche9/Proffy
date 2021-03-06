import { Knex } from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('connections', (table: Knex.TableBuilder) => {
    table.increments('id').primary();

    table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

    table.timestamp('crated_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();    
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('connections');
}