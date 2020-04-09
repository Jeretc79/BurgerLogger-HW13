var orm = require("../config/orm.js");

var history = {
    all(cb) {
        orm.selectAll("history", function(res) {
            cb(res);
        });
    },

    create(newBurger_name, cb) {
        orm.insertOne("history", "burger_name", newBurger_name, function(res) {
            cb(res);
        });
    },

    delete(id, cb) {
        orm.deleteOne("history", id, function(res) {
            cb(res);
        });
    }

};


module.exports = history;