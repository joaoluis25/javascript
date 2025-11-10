const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let resultado = ''
    let soma = 0

    for (let i = 1; i <= 10; i++){
        resultado += `${numero} x ${i} = ${numero * i}\n`
        soma = soma + (numero * i)
    }

    resp.innerText = resultado +  `A soma de todos os resultados da tabuada é de:${soma}.`
})