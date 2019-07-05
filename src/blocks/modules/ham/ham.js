$('.header__menu-btn').click(function(){
	$(this).toggleClass('header__menu-btn--active');
	$(".menu").toggleClass('menu--close');
});