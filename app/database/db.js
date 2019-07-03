import Knex from 'knex';

export default Knex({
    client:'mysql2',
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME,
    }
})