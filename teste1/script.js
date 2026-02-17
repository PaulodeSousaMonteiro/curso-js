document.getElementById('bf').addEventListener('click', function () {
    var fire = document.getElementById('fire');
    fire.style.display = 'block';

    // Adicione um atraso para a animação de fogo ser visível por um curto período de tempo
    setTimeout(function () {
        fire.style.display = 'none';
    }, 3000); // Ajuste esse valor conforme necessário
});