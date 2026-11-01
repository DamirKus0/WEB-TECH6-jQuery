$(document).ready(function () {
    $(".menuTitle").click(function () {
        $(this).next().slideToggle();
    });
});