const express = require('express');
const debug = require('debug');
const router = express.Router();
const db = require('../services/db');

/* GET notes listing. */
router.get('/', async function(req, res, next) {
  const rows = await db.select().from('notes');
  return res.json({
    notes: rows,
  });
});

router.post('/', async function(req, res, next) {
  return res.json({ message: 'note successfully created' });
});

module.exports = router;
