// --------------------






// --------------


const image = document.querySelector('.img')
const point = document.querySelector('.point')
const infoPoints = document.querySelector('.infoPoints')


const divBaixo = document.querySelector('.baixo')
const body = document.querySelector('body')
const song = document.querySelector('.song')

document.addEventListener("mousemove", mover)

point.addEventListener("click", pontuar)





// ---------------

var ponto = 0 
var larguraTela = window.innerWidth
var alturaTela = window.innerHeight

function mover(e){
   valorX = e.clientX
   valorY = e.clientY
   
   image.style.left = `${valorX - 80}px`
   image.style.top = `${valorY + 80}px`
   
}

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function pontuar(){
   ponto += 1
   if(ponto == 1){
      song.play()
   }
   infoPoints.innerHTML = `Pontos = ${ponto}`
   console.log(ponto)
   point.style.left = `${getRandomInt(30, larguraTela) -30}px`
   point.style.top= `${getRandomInt(150, alturaTela - 80)}px`
   if(ponto >= 5){
      divBaixo.style.display = 'flex' 
      body.style.overflowY = 'visible'
      
   }
}

function terrorInicial(){

}
ScrollReveal().reveal('.textHeader h1', { delay: 500 , origin: 'left', duration: 1800, distance: '100px'});
ScrollReveal().reveal('aside p', { delay: 500 , origin: 'right', duration: 2000, distance: '200px'});
ScrollReveal().reveal('.divSpline', { delay: 1000 , origin: 'right', duration: 2500, distance: '200px'});
ScrollReveal().reveal('.inicialMessage', { delay: 300 , origin: 'top', duration: 400, distance: '200px'});
