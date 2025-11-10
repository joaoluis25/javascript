const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNum.value)

    let soma = 0
    let divisores = ''

    for (let i = 1; i < numero; i++){
        if (numero % i === 0){
            soma += i
            divisores += i + ','
        }
    }

    let resultado = `Divisores de ${numero}: ${divisores}\nSoma dos divisores: ${soma}\n.`

    if (soma === numero){
        resultado += `- ✅ ${numero} é um numero perfeito!`
    } else {
        resultado += `- ❌ ${numero} não é um numero perfeito!`
    }
    resp.innerText = resultado
})