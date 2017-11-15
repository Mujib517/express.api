var mongoose = require('mongoose');

module.exports = mongoose.model("User", {
    email: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: false },
    lastUpdated: { type: Date, default: Date.now }
});
