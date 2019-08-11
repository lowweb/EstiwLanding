document.getElementById("contacts").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-contacts').scrollIntoView({block: 'start',behavior: 'smooth' });
};

document.getElementById("service").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-service').scrollIntoView({block: 'start',behavior: 'smooth' });
};

document.getElementById("aboutus").onclick = function() {
  event.preventDefault();
  document.getElementById('scrl-anch').scrollIntoView({block: 'start',behavior: 'smooth' });
};