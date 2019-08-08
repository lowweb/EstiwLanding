document.getElementById("btn-scroll").onclick = function() {
	document.getElementById('scrl-anch').scrollIntoView({block: 'start',behavior: 'smooth' });
};

var vid = document.getElementById("bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 