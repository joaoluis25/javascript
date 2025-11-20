const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit' ,(e)=>{
    e.preventDefault()

    const nome = frm.inNome.value
    const altura = Number(frm.inAlt.value)
    const peso = Number(frm.inPeso.value)

    const imc = (peso / (altura * altura))
    
    if (imc <= 18.5) {
        resp.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está abaixo da sua faixa de peso ideal.`
    } else if (imc <= 25){
        resp.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está dentro da sua faixa de peso ideal.`
    } else if (imc <= 30){
        resp.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está na faixa de excesso de peso.`
    } else if (imc <= 35){
        resp.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está na faixa de obesidade grau 1.`
    } else if(imc <= 40){
        resp.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está na faixa de obesidade grau 2.`
    } else {
        resp.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está na faixa de obesidade morbida ou obesidade grau 3.`
    }
})