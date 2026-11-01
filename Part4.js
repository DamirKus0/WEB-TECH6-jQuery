$(document).ready(function () {
    $("#square").css({
        position: "relative",
        left: "0px",
        top: "0px"
    });
    $("#animateSquare").click(function () {
        $("#square").animate({width: "200px", height: "200px", left: "200px", top: "100px"}, 1000);
    });
});
$(document).ready(function () {
    $("#box").css({
        position: "relative",
        left: "0px",
        top: "0px"
    });
    $("#animateBox").click(function () {
        $("#box").animate({left: "200px"}, 1000);
        $("#box").animate({top: "200px"}, 1000);
        $("#box").animate({width: "50px", height: "50px"}, 1000);
        $("#box").animate({left: "0px", top: "0px"}, 1000);
        $("#box").animate({width: "100px", height: "100px"}, 1000);
    });
});
$(document).ready(function () {
    $("#box2").css({
        position: "relative",
        left: "0px",
        top: "0px"
    });
    $("#animateBox2").click(function () {
        $("#box2").animate({opacity: "0.5", width: "200px", height: "100px", left: "200px", top: "-200px"}, 1000);
    });
});