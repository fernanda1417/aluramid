function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio)
}
const listadeTeclas=document.querySelectorAll('tecla');
let contador=0;

for(contador<listadeTeclas.length;contador++){
const tecla= listadeTeclas[contador]

const instrumento=tecla.classList[1]
const idAudio=`#som_$(instrumento)`;
tecla.onclick=function(){
    tocaSom(idAudio)
}
tecla.onclick= function () {};
contador=contador+1;
}


