
let anchors = document.querySelectorAll('.header__nav a[data-set]');

window.onscroll = function () {
  let header__logo = document.querySelector('.header__logo');
  scr()
  if (header__logo.getBoundingClientRect().top < 0) {
    header__logo.classList.add('header__logo-hover')
  } else {
    header__logo.classList.remove('header__logo-hover')
  }
}



let Do = new Audio();

const obj = {
  do: './icons/note.svg',
  re: './icons/note.svg',
  mi: './icons/note.svg',
}

const au = {
  do: './sound/zvuk-notyi-do.mp3',
  re: './sound/zvuk-notyi-re.mp3',
  mi: './sound/zvuk-notyi-mi.mp3',
}
for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function (e) {
      // e.preventDefault();
      //   let anchorId = this.getAttribute('href');
      let anchorD = this.getAttribute('data-set');
      create(e.target, obj[anchorD], au[anchorD])


    })
  }
}

function create(e, src, mus) {
  let img = document.createElement('img');
  img.src = src;
  Do.src = mus;
  Do.currentTime = 0.0;

  Do.play();
  img.className = 'nav__anim'
  img.style.left = e.getBoundingClientRect().left + 30 + 'px'
  img.style.top = 0
  // img.style.top = e.getBoundingClientRect().top + 'px'
  document.body.append(img);
  setTimeout(() => {
    document.querySelector('.nav__anim').remove()
  }, 900);
}

(() => document.querySelectorAll('.anim').forEach(item => item.classList.add('show')))()
const bgTree = document.querySelector(".about");


let cont = document.querySelector('.section-2');
let box = document.querySelector('.section-2__wraper');
let box1 = document.querySelector('.section-2__main');


function scr() {
  let top = -box.offsetTop
  box1.style.transform = `translateX(${top}px)`
}

window.onresize = (e) => resize();

function resize() {
  cont.style.height = 3630 + (window.innerHeight - window.innerWidth) + 'px'
}
resize()


document.querySelector('.toggle').onclick = function (e) {
  console.log(e.target.id)
  const sum = document.querySelectorAll('.min45');
  const toggle__bg = document.querySelector('.toggle__bg');
  if (e.target.id == 'in') {
    sum.forEach(item => item.classList.add('min60'))
    console.log(toggle__bg)

    toggle__bg.style.transform = "translateX(100%)"
  } else {
    toggle__bg.style.transform = "translateX(0)"

    sum.forEach(item => item.classList.remove('min60'))
  }
}