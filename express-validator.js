// Example using express-validator
const { check } = require('express-validator');
app.post('/book', [
  check('email').isEmail(),
  check('name').notEmpty().escape()
], (req, res) => {
  // process request
});

const bcrypt = require('bcrypt');
const hash = await bcrypt.hash(password, 10);

