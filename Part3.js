$(document).ready(function() {
    $("#addItem").click(function() {
        $("#List").append("<li>Item</li>");
    });
    $("#removeItem").click(function() {
        $("#List li:last").remove();
    });
    $("#prependItem").click(function() {
        $("#List").prepend("<li>Item</li>");
    });
});
$(document).ready(function() {
    $("#changeImage").click(function () {
        $("#image").attr("src", "https://picsum.photos/id/1025/600/400");
    });
    $("#changeHref").click(function () {
        $("#link").attr("href", "part2.html", function() {
            alert("Link changed to Part 2");
        });
    });
});
$(document).ready(function() {
    $("#Name").on("input", function() {
        $("#outputName").text("Name: " + $(this).val());
    });
    $("#Email").on("input", function() {
        $("#outputEmail").text("Email: " + $(this).val());
    });
});