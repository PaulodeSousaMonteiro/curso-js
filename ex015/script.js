function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resu')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tent novamente!')
    } else {
        var fcp = document.getElementsByName('radcp')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var corp = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (fcp[0].checked) {
                corp = 'Negro'
            } else {
                corp = 'Branco'
            }
        } else {
            gênero = 'Mulher'
            if (fcp[0].checked) {
                corp = 'Negra'
            } else {
                corp = 'Branca'
            }
        }
        if (idade >= 0 && idade < 10 && gênero == 'Homem' && corp == 'Negro') {
            img.setAttribute('src', 'bebe.h.n.jpg')
        } else if (idade < 21 && gênero == 'Homem' && corp == 'Negro') {
            img.setAttribute('src', 'jovem.h.n.jpg')
        } else if (idade < 50 && gênero == 'Homem' && corp == 'Negro') {
            img.setAttribute('src', 'adulto.h.n.jpg')
        } else if (idade < 100 && gênero == 'Homem' && corp == 'Negro') {
            img.setAttribute('src', 'velho.h.n.jpg')
        } else if (idade >= 0 && idade < 10 && gênero == 'Homem' && corp == 'Branco') {
            img.setAttribute('src', 'bebe.h.b.jpg')
        } else if (idade < 21 && gênero == 'Homem' && corp == 'Branco') {
            img.setAttribute('src', 'jovem.h.b.jpg')
        } else if (idade < 50 && gênero == 'Homem' && corp == 'Branco') {
            img.setAttribute('src', 'adulto.h.b.jpg')
        } else if (idade < 100 && gênero == 'Homem' && corp == 'Branco') {
            img.setAttribute('src', 'velho.h.b.jpg')
        } else if (idade >= 0 && idade < 10 && gênero == 'Mulher' && corp == 'Negra') {
            img.setAttribute('src', 'bebe.m.n.jpg')
        } else if (idade < 21 && gênero == 'Mulher' && corp == 'Negra') {
            img.setAttribute('src', 'jovem.m.n.jpg')
        } else if (idade < 50 && gênero == 'Mulher' && corp == 'Negra') {
            img.setAttribute('src', 'adulto.m.n.jpg')
        } else if (idade < 100 && gênero == 'Mulher' && corp == 'Negra') {
            img.setAttribute('src', 'velho.m.n.jpg')
        } else if (idade >= 0 && idade < 10 && gênero == 'Mulher' && corp == 'Branca') {
            img.setAttribute('src', 'bebe.m.b.jpg')
        } else if (idade < 21 && gênero == 'Mulher' && corp == 'Branca') {
            img.setAttribute('src', 'jovrm.m.b.jpg')
        } else if (idade < 50 && gênero == 'Mulher' && corp == 'Branca') {
            img.setAttribute('src', 'adultomb.jpg')
        } else if (idade >= 50 && idade < 100 && gênero == 'Mulher' && corp == 'Branca') {
            img.setAttribute('src', 'velho.m.b.jpg')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero}, ${corp} com ${idade} anos.`
        res.appendChild(img)
    }
}