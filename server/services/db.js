const knex = require('knex');
const dbconfig = require('../knexfile');

module.exports = knex(dbconfig[process.env.NODE_ENV]);
