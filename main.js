function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[0].onclick = tocaSom;

    contador = contador + 1;

    console.log(contador);
}

