// --------------------




// --------------

window.scroll(0,0)
const image = document.querySelector('.img')
const point = document.querySelector('.point')
const infoPoints = document.querySelector('.infoPoints')
const timer = document.querySelector('.Timer')


const divBaixo = document.querySelector('.baixo')
const body = document.querySelector('body')
const song = document.querySelector('.song')
const all = document.querySelector('.all')

time = 0
document.addEventListener("mousemove", mover)

point.addEventListener("click", pontuar)


setInterval(() => {
   
   time++;
   timer.innerHTML = `Tempo: ${time}`
   if(ponto<5){
      if(time >= 10){
         timer.innerHTML = `Morreu`
         image.style.display = 'none'
         point.style.display = 'none'
         timer.style.color = 'red'
      }
   }else{
      timer.innerHTML = ``
   }
   
}, 1000);


// ---------------

var ponto = 0 
var larguraTela = window.innerWidth
var alturaTela = window.innerHeight

function mover(e){
   valorX = e.clientX
   valorY = e.clientY
   
   image.style.left = `${valorX - 80}px`
   image.style.top = `${valorY - 50}px`
   
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
      all.style.height = '30vh'
      divBaixo.style.display = 'flex' 
      body.style.overflowY = 'visible'
      image.style.display = 'none'
      point.style.display = 'none'
      window.scroll(0 , 250);
      
   }
}

function terrorInicial(){

}
ScrollReveal().reveal('.textHeader h1', { delay: 500 , origin: 'left', duration: 1800, distance: '100px'});
ScrollReveal().reveal('aside p', { delay: 500 , origin: 'right', duration: 2000, distance: '200px'});
ScrollReveal().reveal('.divSpline', { delay: 1000 , origin: 'right', duration: 2500, distance: '200px'});
ScrollReveal().reveal('.inicialMessage', { delay: 300 , origin: 'top', duration: 400, distance: '200px'});
