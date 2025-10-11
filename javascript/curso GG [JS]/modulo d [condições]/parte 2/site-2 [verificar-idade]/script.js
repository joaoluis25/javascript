function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente ')
    } else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id' , 'foto')
      if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'kidman.png')
        } else if ( idade < 21){
            //jovem
            img.setAttribute('src' , 'fotohomem20.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src' , 'fotohomem40.png')
        } else {
            //idoso
            img.setAttribute('src' , 'fotohomem70.png')
        }
      } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src' , 'kidgirl.png')
        } else if ( idade < 21){
            //jovem
            img.setAttribute('src' , 'fotomulher20.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src' , 'fotomulher40.png')
        } else {
            //idoso
            img.setAttribute('src' , 'fotomulher70.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos um/a ${genero} com ${idade} anos.`
      res.appendChild(img)
    }
}