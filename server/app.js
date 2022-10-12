const express = require('express');
const path = require('path');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');

const app = express();

app.use(logger('dev'));
// https://expressjs.com/en/api.html#express.json
app.use(express.json());
// https://expressjs.com/en/api.html#express.urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/api/notes', notesRouter);

module.exports = app;
