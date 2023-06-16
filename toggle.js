const mobile_nav = document.querySelector(".icon-box");
const nav_header = document.querySelector(".nav-fill");

const toggleNavbar = ( ) => {

    nav_header.classList.toggle("active");
}
    
mobile_nav.addEventListener("click",()  =>  toggleNavbar());

$(document).ready(function(){
    $('button.slick-prev.slick-arrow ,button.slick-next.slick-arrow').empty( function(){
        $(this).html()
    })
    $('button.slick-next.slick-arrow').append( function(){
        $(this).html('<i class="fa fa-chevron-right" aria-hidden="true"></i>')
        $(this).css("color","#fff")
    })
    $('button.slick-prev.slick-arrow').append( function(){
        $(this).html('<i class="fa fa-chevron-left" aria-hidden="true"></i>')
        $(this).css("color","#fff")
    })
  })