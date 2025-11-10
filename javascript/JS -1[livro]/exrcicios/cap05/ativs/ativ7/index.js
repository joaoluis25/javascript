const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let soma = 0
    let numeros = ''

    for (let i = 2;i <= numero;i += 2){
        soma = soma + i
        numeros = numeros + i + ','
    }
    resp.innerText = `Numeros pares até ${numero}: ${numeros}\nSoma total:${soma}`
})