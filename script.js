//запуск анимации
// (() => document.querySelectorAll('.anim').forEach(item => {
//   item.style.cssText = `
//   opacity: 1;
//   transform: translate(0);`
// }))()
window.onload = ()=>{
  document.querySelector('.preloader').remove()
  document.querySelectorAll('.anim').forEach(item => {
    item.style.cssText = `
    opacity: 1;
    transform: translate(0);`
  })
}
//падение ноток при нажатии на пункты навигации
const soundSource = {
  re: "./sound/zvuk-notyi-re.mp3",
  si: "./sound/zvuk-notyi-si.mp3",
  sol: "./sound/zvuk-notyi-sol.mp3",
}

document.querySelector('.header__nav').addEventListener('mousedown', e => {
  if (e.target.dataset.note) {
    createNote(e.target, soundSource[e.target.dataset.note])
  }
})

const noteImg = new Image();
noteImg.src = './icons/note.svg';
noteImg.className = 'nav__anim'

function createNote(e, source) {
  const sound = new Audio();
  sound.src = source;
  sound.currentTime = 0.0;
  sound.play();

  const note = noteImg.cloneNode(true)
  note.style.left = e.getBoundingClientRect().left - 15 + e.clientWidth / 2 + 'px'
  note.style.top = '10px'
  document.body.prepend(note);

  setTimeout(() => note.remove(), 1000);
}

//добавление класса к логотипу
window.addEventListener('scroll', () => {
  let header__logo = document.querySelector('.header__logo');

  if (header__logo.getBoundingClientRect().top < 0) {
    header__logo.classList.add('header__logo-hover')
  } else {
    header__logo.classList.remove('header__logo-hover')
  }
})

//горизонтальная прокрутка section-2
window.addEventListener('scroll', () => scr())

function scr() {
  const wraper = -document.querySelector('.section-2__wraper').offsetTop;
  const main = document.querySelector('.section-2__main');
  main.style.transform = `translateX(${wraper}px)`
}

window.onresize = () => resize();

function resize() {
  document.querySelector('.section-2').style.height = 3630 + (window.innerHeight - window.innerWidth) + 'px'
}
resize()

//смена стилей для блока toggle
document.querySelector('.toggle').onclick = function (e) {
  const price = document.querySelectorAll('.min45');
  const toggle__bg = document.querySelector('.toggle__bg');

  toggle__bg.style.transform = e.target.id == 'min60' ? "translateX(100%)" : "translateX(0)"
  price.forEach(item => item.style.transform = e.target.id == 'min60' ? "translateY(-26px)" : "translateY(0)")
}


//появление элементов списка program
window.addEventListener('scroll', ()=>show())

function show(){
  document.querySelectorAll('.program__li').forEach(i=>{
    if(i.getBoundingClientRect().top - 100 < window.innerHeight){
      i.classList.add('show')
    }else{
      i.classList.remove('show')
    }
  })
}
