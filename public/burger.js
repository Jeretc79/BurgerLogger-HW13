$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bn").val().trim(),
        };


        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("A new burger was submitted!!!");

                location.reload();
            }
        );
    });



    $(".status-btn").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("status");
        var newBurgerState = {
            newStatus: !devoured
        };
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(function() {
            console.log("ID: " + id + " burger was changed status to " + !devoured);

            location.reload();
        });
    });

    $(".deleteBtn").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var burger_name = $(this).data("burger");
        $.ajax(`api/burgers/${id}/${burger_name}`, {
            type: "DELETE",
        }).then(function() {
            console.log("ID: " + id + " burger deleted!!!");

            location.reload();
        });
    });

    $(".recoverBtn").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var burger_name = $(this).data("burger");
        var recoveredBurger = {
            id: id,
            burger_name: burger_name
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: recoveredBurger
        }).then(function() {
            console.log("ID: " + id + " burger recovered!!!");

            location.reload();
        });
    });

});