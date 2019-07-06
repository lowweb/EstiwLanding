// $('.header__menu-btn').click(function(){
// 	$(this).toggleClass('header__menu-btn--active');
// 	$(".menu").toggleClass('menu--close');
// });

document.getElementById("menu-btn").onclick = function() {
	document.getElementById("menu-btn").classList.toggle('ham--active');
};