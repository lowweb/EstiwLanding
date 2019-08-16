function closeMenu () {
	document.getElementsByClassName('hd')[0].classList.toggle('hd--opn');
	document.getElementById("menu-btn").classList.toggle('ham--active');
}

document.getElementById("contacts").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-contacts').scrollIntoView({block: 'start',behavior: 'smooth' });
  closeMenu ();
};

document.getElementById("service").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-service').scrollIntoView({block: 'start',behavior: 'smooth' });
  closeMenu ();
};

document.getElementById("aboutus").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-anch').scrollIntoView({block: 'start',behavior: 'smooth' });
  closeMenu ();
};

document.getElementById("mainpage").onclick = function() {
  closeMenu ();
};

