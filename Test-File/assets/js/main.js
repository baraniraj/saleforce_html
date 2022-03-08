$(function () {
    // animate
    new WOW().init();

    $('#carousel').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 15,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        navText: ["<img src='assets/images/left_arrow.png'>","<img src='assets/images/right_arrow.png'>"],
        items:4,
        responsive: {
          0: {
            items: 1
          },
      
          767: {
            items: 2
          },      
          991: {
            items: 3
          },      
          1280: {
            items: 4
          }
        }
    });
    // activ class
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
        $(this).parent().parent().toggleClass("active");
    });
    // contact popup
    $('#contactModal').on('click', function() {
        $('#contactModal').modal();
    });

})

const name_val = document.getElementById("name");
const forename_val = document.getElementById("forename");
const society_val = document.getElementById("society");
const email_val = document.getElementById("email");
const phone_val = document.getElementById("phone");
const project_val = document.getElementById("project");
const address_val = document.getElementById("address");

function validate(){
    var newLine = "\r\n";
    alert("Nom: "+ name_val.value + newLine +"Prénom: "+ forename_val.value + newLine +"Société: "+ society_val.value
    + newLine +"Email: "+ email_val.value + newLine +"Téléphone: "+ phone_val.value + newLine +"Sujet: "+ project_val.value 
    + newLine +"Votre Message: "+ address_val.value + newLine +"Success!"
    );    
}