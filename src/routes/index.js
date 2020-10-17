// exports.index = function (req, res) {
//     res.render('index', { title: 'Express', foo: { bar: 'baz' } });
// };

const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));

module.exports = router;