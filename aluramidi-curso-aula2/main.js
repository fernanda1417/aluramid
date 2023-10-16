function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
const listadeTeclas=document.querySelectorAll('tecla');
let contador=0;

while(contador<0){
listadeTeclas[contador].onclick=tocaSom;
contador=contador+1;
}


