//Função pra mudar os slides do café

function imgSlider(mudar) {
    document.querySelector('.starbucks').src = mudar;
}

function mudarCirculo(cor) {
    const circle = document.querySelector('.circle');
    circle.style.background = cor;
}