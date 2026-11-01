$(document).ready(function(){
    console.log("jQuery is ready!");
});
$(document).ready(function(){
  $("button").click(function(){
    $("p").html("<i>jQuery</i>").css("color", "red");
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $("#idone").text("Another text for ID selector").css("font-size", "20px");
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $(".classone").html("<b>Another text for class selector</b>").css({"font-size": "15px", "text-decoration": "underline", "color": "green"});;
  });
});
