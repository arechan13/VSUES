
/*навигация*/ 
/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
    
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();/*текущее положение на странице */


    /* фиксация шапки */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {/*скролл страницы*/ 
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);/*вызыв функции  */
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) { /*если пролистано пикселей больше чем высота интро, то шапка фиксируется */
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* пролистывание по странице */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this), 
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top; /* количество пикселей до блока */

        $("#nav_v a").removeClass("active");/*выделяется активный элемент*/ 
        $this.addClass("active");

        $("html, body").animate({ /*плавная анимация */
            scrollTop:  blockOffset
        }, 500);
    });

     /* активное появление исчезновеие меню для мобилок */
      $("#nav_to").on("click", function(event) { 
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav_v").toggleClass("active");
    });

    /* активное появление исчезновеие меню для мобилок */
    $("#nav_toggle").on("click", function(event) { 
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
 


    /* Плавное открытие про специальность */
   $("[data-collapse]").on("click", function(event) {
       
        
    event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
 
        $this.toggleClass("active");
        
    });


    /* Карусель отзывов*/
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
