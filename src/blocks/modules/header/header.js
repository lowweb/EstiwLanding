window.onscroll = function() {scrollFunction()};



  function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function scrollFunction() {
	 var el=getElementsByClassName('sc-main__scrl-anch')[0];
	 console.log(getOffset(el).top);
  if (document.body.scrollTop > getOffset(el).top || document.documentElement.scrollTop > getOffset(el).top) {
    document.getElementsByClassName('hd')[0].classList.add('hd--fix');
    document.getElementsByClassName('hd')[0].classList.remove('hd--tr');
  } else {
    document.getElementsByClassName('hd')[0].classList.remove('hd--fix');
    document.getElementsByClassName('hd')[0].classList.add('hd--tr');
  }
}