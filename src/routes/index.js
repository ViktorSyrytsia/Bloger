exports.index = function (req, res) {
    res.render('index', { title: 'Express', foo: { bar: 'baz' } });
};