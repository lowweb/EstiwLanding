window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
    document.getElementsByClassName('hd')[0].classList.add('hd--fix');
    document.getElementsByClassName('hd')[0].classList.remove('hd--tr');
  } else {
    document.getElementsByClassName('hd')[0].classList.remove('hd--fix');
    document.getElementsByClassName('hd')[0].classList.add('hd--tr');
  }
}