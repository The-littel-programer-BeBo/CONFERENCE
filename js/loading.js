// animation typing
function typeMsg(massage, ele){
  // intro.classList.remove('clean')
  test = false
  let newMsg = massage.split('')
  let x = 0
  ele.innerHTML = ''
  let type = setInterval(() => {
    if (x < newMsg.length) {
      ele.innerHTML +=`<span data-text='${newMsg[x]}' style='animation-delay:${x / 100}s;'>${newMsg[x] == ' ' ? '&nbsp;' : newMsg[x]}</span>`
      x++
    } else {
      clearInterval(type)
      enter.next()
    }
  },250)
}

typeMsg('icnh',left)
function* chating(){
  yield typeMsg('bas',right)
  yield window.addEventListener('load',finshed())
}
let enter = chating()

function finshed(){
  left.style.cssText = 'transform:translateX(-104%)'
  right.style.cssText = 'transform:translateX(104%)'
  setTimeout(()=>loadingPage.style.cssText = 'display:none',2100)
  setTimeout(()=>enableScroll(),1000) 
}

// disable scroll before loading
function disableScroll() {
  // Get the current page scroll position
  scrollTop =
  window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft =
  window.pageXOffset || document.documentElement.scrollLeft,

  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
  };
}
disableScroll()
// enable scroll after loading
function enableScroll() {
  window.onscroll = function() {};
}