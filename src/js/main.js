$(document).ready(function(){

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  // Toggle menu
  $('.content__menu ul > li.have-ul > a').on('click', function(){
    $(this).parent().toggleClass('active');
    $(this).parent().find('ul').fadeToggle();
  });

  $('.ico-hamb').on('click', function(){
    $(this).toggleClass('active');
    $(this).parent().find('.header__navi__drop').fadeToggle();
  });

  // fake sorting
  $('.sorting .btn').on('click', function(){
    $(this).toggleClass('active');
  });


  $('#owlTop').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
  });
  $('#owlTopMobile').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
  });

});
