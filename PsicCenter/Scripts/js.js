const imgs = [
    {img:"../Pictures/family-2.jpeg"},
    {img:"../Pictures/family-3.jpeg"},
    {img:"../Pictures/family-4.jpeg"},
    {img:"../Pictures/family-7.jpeg"},
]
let index = 0;
let picture = document.getElementById("familyimg")
setInterval(()=>{
  picture.classList.toggle('change');
        index>=imgs.length-1?index=0:index++
      setTimeout(() => {
        picture.src = imgs[index].img;
        picture.classList.toggle('change');
      },500)
},5000)

const inter = ['Dia','Saude','Vida']
let i = 0;
const intervalo = document.getElementById('intervalo')
const intervalos = document.getElementById('intervalos')
const loading = document.querySelector('.loader')
loading.style.display='block'
window.addEventListener('load',()=>{
  loading.style.display='none'
  document.body.style.overflow='inherit';
})
setInterval(()=>{
    i>=inter.length-1?i=0:i++
    intervalo.classList.toggle('change')
    intervalos.classList.toggle('change')
    setTimeout(()=>{
    intervalo.innerHTML = inter[i]
    intervalos.innerHTML = inter[i]
    intervalo.classList.toggle('change')
    intervalos.classList.toggle('change')
  },500)
},2500)

const menulogo = document.getElementById('menulogo')
const mainheaderul = document.querySelector('.mainheaderul')
const mainheader = document.querySelector('.mainheader')
const firstmenu =document.querySelectorAll('.firstmenu')
const navegate = document.querySelectorAll('.navegate')

const headeraction = () =>{
  mainheaderul.classList.toggle('mainheaderuloff')
  mainheader.classList.toggle('mainheaderoff')
  firstmenu[0].classList.toggle('firstbar')
  firstmenu[1].classList.toggle('middlebar')
  firstmenu[2].classList.toggle('thirdbar')
}

menulogo.addEventListener('click',()=>{
  headeraction()
})

navegate.forEach(elem=>{
  elem.addEventListener('click',()=>{
    headeraction()
  })
})

const listadasofertas = document.querySelectorAll('.listadasofertas')
const mobileshow = document.querySelector('.mobileshow')



window.addEventListener('resize', function() {
  if (window.innerWidth < 927) {
    listadasofertas[0].style='opacity:1'
listadasofertas.forEach(elem=>{
  elem.addEventListener('click',()=>{
        listadasofertas.forEach(ele=>{
          ele.style='opacity:0.3'
        })
        event.target.parentElement.style='opacity:1'
        event.target.style='opacity:1'
        console.log(event.target.parentElement)
        mobileshow.innerHTML=''
        mobileshow.classList.toggle('change')
        mobileshow.innerHTML=''
        mobileshow.innerHTML=event.currentTarget.children[1].innerHTML
        mobileshow.classList.toggle('change')
  })
})} 
});