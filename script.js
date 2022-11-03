function teste() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade  >0 && idade <10) {
                img.setAttribute('src', '/img/mulher.png')
            }else if (idade >= 11 && idade <= 49) {
                img.setAttribute('src', '/img/mulher.png')
            }else if (idade >= 50) {
                img.setAttribute('src', '/img/velha.png')
            } else {

            }
        
          }else if (fsex[0].checked) {
            genero ='Homem'
            if (idade  >0 && idade <10) {
                img.setAttribute('src', '/img/homem.png')
            }else if (idade >=11 && idade <= 49) {
                img.setAttribute('src', '/img/homem.png')
            }else if (idade >= 50) {
                img.setAttribute('src', '/img/velhote.png')
            } else {

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}

