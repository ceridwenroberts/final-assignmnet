$(function () {
  console.log("homeNav.js");

  $(".home-nav-btn").click(function () {
    $(".works-list").fadeToggle();
    $(this).fadeToggle();
    $(this).parent().siblings().fadeToggle();
  });

  $(".home-subnav-item-master-btn").click(function () {
    console.log("works clicked");
    $(".works-list-mastermind").fadeToggle();
    $(this).parent().siblings().toggleClass("faded");
  
    

  });
}); //main fn close
