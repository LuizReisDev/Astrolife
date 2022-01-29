// Criação da função JavaScript responsável por exibir o menu ao clicar no menu hamburguer para tablets e celulares.

window.onload = function() {
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
}