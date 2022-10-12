var express = require('express');
var router = express.Router();

const notes = [
  {
    id: 1,
    html: `
      <h1>My todo list</h1>
      <ul>
        <li>Create server</li>
        <li>Create react app</li>
      </ul>
    `,
  },
];

/* GET notes listing. */
router.get('/', function(req, res, next) {
  res.json({
    notes: notes,
  });
});

module.exports = router;
