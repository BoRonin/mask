jQuery(document).ready(function($) {

    
  var scrollLink = $('.scroll');

  //Smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top - 70
    }, 500)
  })

  //Menu scroll active class
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top;
      if (sectionOffset - 75 <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active')
      }
    })
  })

});
