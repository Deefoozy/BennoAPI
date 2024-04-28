/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('statie_geld', (table) => {
            table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()"));
            table.string('name').notNullable();
            table.decimal('worth').notNullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('statie_geld')
};
