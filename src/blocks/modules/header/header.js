window.onscroll = function() {scrollFunction()};

//функция определения положение яэлемента
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
//определили якорь
var el=document.getElementById('scrl-anch');

function scrollFunction() {
  if (document.body.scrollTop > getOffset(el).top - 20 || document.documentElement.scrollTop > getOffset(el).top - 20) {
    document.getElementsByClassName('hd')[0].classList.add('hd--fix');
    document.getElementsByClassName('hd')[0].classList.remove('hd--tr');
  } else {
    document.getElementsByClassName('hd')[0].classList.remove('hd--fix');
    document.getElementsByClassName('hd')[0].classList.add('hd--tr');
  }
}

document.getElementById("hdLogo").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.getElementById("sendRequest").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

