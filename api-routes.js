var db = require("../models");

module.exports = function(app){

    app.get("/",function(req,res){
        db.Burger.findAll({}).then(function(data){
            var allBurger = {
                burgers: data
            };
            res.render("index",allBurger);
        });
    });
    
    app.post("/api/burgers", function(req, res){
        db.Burger.create ({
            burger_name: req.body.burger_name
        }).then(function(){
            res.status(200).end();
        }).catch(function(err){
            console.error(err.message);
        })
    });
    
    app.put("/api/burgers/:id", function(req, res){
        db.Burger.update({
            devoured: req.body.newStatus
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.status(200).end();
        })
    });
}