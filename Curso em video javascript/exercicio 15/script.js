function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.getAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'meninobb.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'homem.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'idoso.jpg')
            }
            else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'meninabb.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'mulher.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'idosa.jpg')
            }
            else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ${gênero} com ${idade} anos'
        res.appendChild(img)
    }
}