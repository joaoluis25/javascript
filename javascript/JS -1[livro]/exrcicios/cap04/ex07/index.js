const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNum.value)

    if (numero < 100 || numero >= 1000){ 
        window.alert('Erro! O seu numero precisa estar entre 100 e 999, digite outro valor!')
    }

    const num1 = Math.floor(numero / 100)
    const resto = numero % 100
    const num2 = Math.floor(resto/10)
    const num3 = resto % 10

    resp.innerText = `Invertido: ${num3}${num2}${num1}`
})