function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = 'manha.jpg'
    document.body.style.background = '#ec9c69'
    msg.innerHTML += `<p><strong>BOM DIA!</strong></p>`
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'tarde.jpg'
    document.body.style.background = '#5c4734'
    msg.innerHTML += `<p><strong>BOA TARDE!</strong></p>`
} else {
    //BOA NOITE!
    img.src = 'noite.jpg'
    document.body.style.background = '#507d9c'
    msg.innerHTML += `<p><strong>BOA NOITE!</strong></p>`
}
}