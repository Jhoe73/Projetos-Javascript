var btnSingle = document.querySelector('.single');
var btnMult = document.querySelector('.mult');
var spanModo = document.querySelector('.spanModo');
var modoDeJogo = 'SinglePlayer';

btnSingle.style.background = '#66708b';

btnSingle.addEventListener("click", function () {
    btnSingle.style.background = '#66708b';
    btnMult.style.background = '#434a5d';

    spanModo.innerHTML = 'Modo: Single Player';
    modoDeJogo = 'SinglePlayer';

    playAgain();
})

btnMult.addEventListener("click", function () {
    btnMult.style.background = '#66708b';
    btnSingle.style.background = '#434a5d';

    spanModo.innerHTML = 'Modo: Multiplayer';
    modoDeJogo = 'Multiplayer';

    playAgain();
})