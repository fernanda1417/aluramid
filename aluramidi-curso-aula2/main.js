function tocaSom(selectorAudio) {
    const elemento = document.querySelector (idElementoAudio);
    idElementoAudio(elemento&&elemento.localName==='audio'){

    elemento.play;();
    }
    else {
        console.log("elemento nao encontrado")
    
    }
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

teclaonkeydown = function(evento) {                 
if (evento.code ==='enter' || evento.code==='space')
tecla={.classlist.add( 'ativa') 

tecla.onkeyup = funcion (){  
    tecla.classList.remove('ativa'):
}



}

}


