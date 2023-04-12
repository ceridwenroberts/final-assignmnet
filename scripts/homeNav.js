$(function () {
  console.log("homeNav.js");

  $(".home-nav-btn").click(function () {
    $(".home-subnav-work").fadeToggle();
  });

  $(".home-subnav-item-master-btn").click(function () {
    $(this).parent().siblings().addClass("faded");
    $(".home-subsubnav-item-master").fadeToggle();
    

  });
}); //main fn close
