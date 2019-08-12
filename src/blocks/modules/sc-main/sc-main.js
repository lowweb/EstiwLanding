//якоря
document.getElementById("btn-scroll").onclick = function() {
	document.getElementById('scrl-anch').scrollIntoView({block: 'start',behavior: 'smooth' });
};

if (window.matchMedia("(min-width: 767px)").matches) {
	var videoCont = document.getElementById('videoCont');
	var videoElm = document.createElement('video');

	// videoElm.setAttribute('autoplay', 'autoplay');
	videoElm.setAttribute('loop', 'loop');
	videoElm.setAttribute('preload', 'auto');
	videoElm.setAttribute('muted', 'muted');
	videoElm.setAttribute('class', 'sc-main__video');
	videoElm.setAttribute('id', 'backVideo');

	var mp4Source = document.createElement('source');
	mp4Source.setAttribute('src', 'img/sc-main-video.mp4');
	mp4Source.setAttribute('type', 'video/mp4');
	videoElm.appendChild(mp4Source);

	videoCont.style.backgroundColor = '#00171F';
	videoCont.appendChild(videoElm);
	}


document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
         document.getElementById('backVideo').play();
    }
});

// setTimeout(function () {
	// 	document.getElementById('backVideo').play();
	// }, 2000);





