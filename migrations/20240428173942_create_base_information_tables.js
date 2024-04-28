/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()"));
            table.string('name').notNullable();
            table.string('nickname').notNullable();
            table.integer('bierInKelder').notNullable().defaultTo(0);
            table.integer('geinhaleerdBier').notNullable().defaultTo(0);
            table.integer('barfieCounter').notNullable().defaultTo(0);
        })
        .createTable('bier_meubels', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()"));
            table.string('name').notNullable();
            table.integer('krattenNodig').notNullable().defaultTo(0);
        })
        .createTable('user_bier_meubels', (table) => {
            table.uuid('user_id').notNullable();
            table.uuid('bier_meubel_id').notNullable();

            table.primary(['user_id', 'bier_meubel_id'])

            table.foreign('user_id').references('users.id')
            table.foreign('bier_meubel_id').references('bier_meubels.id')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('users')
        .dropTable('bier_meubels')
        .dropTable('user_bier_meubels')
};
