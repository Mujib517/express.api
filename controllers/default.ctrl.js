var Ctrl = {
    get: function (req, res) {
        res.send("Hello Expess!");
    },

    health: function (req, res) {
        res.status(200);
        res.json({ status: 'Up' });
    }
};

module.exports = Ctrl;