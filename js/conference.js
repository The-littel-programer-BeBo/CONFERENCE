let arrive = home.clientHeight
const switchs = document.querySelectorAll('.switch')
// control nav in scroll
let lastScrollTop = 0;
window.addEventListener('scroll',()=>{
  let windowPosition = window.scrollY > (arrive+arrive/20),
      scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  if(scrollTop > lastScrollTop && windowPosition){
    nav.style.cssText = 'transform: translateY(-110%);'
  }else{
    nav.style.cssText = 'transform: translateY(0%);'
  }
  lastScrollTop = scrollTop; 
  showPersons()

  // close nav
  toggler.classList.remove('toggler')
  nav.classList.remove('full')
  // hide dropdown-menu 
  document.querySelector('.dropdown-menu').classList.remove('show')
})
window.addEventListener('load',_=>showPersons())

// toggler
toggler.addEventListener('click',_=>{
  toggler.classList.toggle('toggler')
  nav.classList.toggle('full')
  document.querySelector('.dropdown-menu').classList.remove('show')
})

// control any dropdown
switchs.forEach(e=>{
  e.addEventListener('click',()=>{
    document.querySelector(`[data-class='${e.dataset.switch}']`).classList.toggle(`${e.dataset.switch}`)
  })
})

// show persons
function showPersons(){
  if(firstPerson.getBoundingClientRect().top >=  -arrive/4 &&
  firstPerson.getBoundingClientRect().top <= arrive/1.5){
    persons.classList.add('show')
  }
}

// change home background
const background = [
  'home.jpg',
  'home1.jpeg',
  'home2.jpg',
  'home3.jpg',
  'home4.jpg',
  'home5.jpg',
  'home6.jpg',
  'home7.jfif',
  'home8.jpg',
  'home9.jpg']
let x = 1
setInterval(_=>{
  home.style.backgroundImage = `url('imgs/${background[x]}')`
  x == background.length-1? x=0 : x+=1
},4000)

// shown p
let shown = false,
    ps = document.querySelectorAll('p.shown');

read.addEventListener('click',_=>{
  ps.forEach(p=>{
    p.style.cssText = `display:${shown?'none':'block'}`
  })
  if(shown){
    read.textContent = 'Read More....'
    shown = false
  }else{
    read.textContent = 'Read Less....'
    shown = true
  }
})

// countdown timer
let day_dot = document.querySelector('.day_dot')
let hr_dot = document.querySelector('.hr_dot')
let min_dot = document.querySelector('.min_dot')
let sec_dot = document.querySelector('.sec_dot')

// date formate mm/dd/yyyy
let endDate = `09/22/2023 09:00:00`

let  countDownTimer = setInterval(()=>{
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  // fime calculation for days ,hours ,minutes and seconds
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  // output the result to element
  days.innerHTML = `${d}<br><span>Days</span>`
  hours.innerHTML = `${h}<br><span>Hours</span>`
  minutes.innerHTML = `${m}<br><span>minutes</span>`
  seconds.innerHTML = `${s}<br><span>seconds</span>`

  // animate stroke
  dd.style.strokeDashoffset = 440 -  (440 * d) / 365
  hh.style.strokeDashoffset = 440 -  (440 * h) / 24
  mm.style.strokeDashoffset = 440 -  (440 * m) / 60
  ss.style.strokeDashoffset = 440 -  (440 * s) / 60
  
  //animate circle dots
  day_dot.style.transform = `rotateZ(${d * 0.986}deg)`
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`
  min_dot.style.transform = `rotateZ(${m * 6}deg)`
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`

  if(distance < 0){
    clearInterval(countDownTimer);
    time.style.display = 'none'
  }
},1000)

// slide image
// const sponsors = [
//   '<img src="imgs/chem-tech.png" alt="chem-tech">',
//   '<img src="imgs/conference.png" alt="science-logo">',
//   '<img src="imgs/science-logo.png" alt="science-logo">'
// ]
// let i = 0;
// let move = 0;
// setInterval(()=>{
//   slide.insertAdjacentHTML('beforeend',sponsors[i])
//   i == sponsors.length -1 ? i = 0 : i += 1;
//   setTimeout(()=>{
//     slide.children[move].style.cssText = `right:200vw;`
//     move+=1
//   },500)
//   // slide.style.transform = `translateX(${move*5}%)`
//   // slide.style.width = `${move*20}%`
// },1000)