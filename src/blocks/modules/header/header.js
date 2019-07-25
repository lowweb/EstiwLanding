window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementsByClassName('hd')[0].classList.add('hd--fix');
    document.getElementsByClassName('hd')[0].classList.remove('hd--tr');
  } else {
    document.getElementsByClassName('hd')[0].classList.remove('hd--fix');
    document.getElementsByClassName('hd')[0].classList.add('hd--tr');
  }
}