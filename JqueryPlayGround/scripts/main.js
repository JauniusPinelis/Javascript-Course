console.log("Javascript works");
// Showing and hiding HTML tags in Javascript
document.querySelector("p").style.display = "none";
document.querySelector("p").style.display = "block";
// Showing and hiding HTML tags in Jquery
$("p").hide();
$("p").show();


//This ensures that your html fully loaded before running the scripts
$(document).ready(function(){

})

// javascript add event onclick to hide text
let button = document.querySelector("#hide-text");
button.addEventListener("click", function(){
    document.querySelector("p").style.display = "none";
})

// jquery add event onclick to hide text
$("#hide-text").click(function(){
    $("p").hide();
})

// Jquery Dom manipulation
$("p").mouseenter(function(){
    $("p").text("You have entered with the mouse");
})

$("p").mouseleave(function(){
    $("p").html("<h2>You have left<h2>");
})

$("h3").text($("p").text());

// Use Ajax on click

$("button#fetch-data").click(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/posts", function(result){
      console.log(result);
    //   $.each(result, function(i, field){
    //     $("div").append(field + " ");
    //   });
    });
  });