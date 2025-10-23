const frm = document.querySelector('form')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')
const resp3 = document.querySelector('#resp3')


frm.addEventListener('submit', (e)=>{
    const saque = Number(frm.inNum. value)

    if (saque % 10 != 0){
        window.alert('Valor invalido para as notas disponiveis [10,50,100].')
        frm.inNum.focus()
        return
    }

    const notasCem = Math.floor(saque/100)
    let resto = saque % 100

    const notasCinquenta = Math.floor(resto/50)
    resto = resto % 50

    const notasDez = Math.floor(resto/10)
    
    if (notasCem > 0){
        resp1.innerText = `Notas de R$100= ${notasCem}`
    } else {
        resp1.innerText = `Notas de R$100= 0`
    }

    if (notasCinquenta > 0){
        resp2.innerText = `Notas de R$50= ${notasCinquenta}`
    } else {
        resp2.innerText = 'Notas de R$50= 0'
    }

    if (notasDez > 0){
        resp3.innerText = `Notas de R$10= ${notasDez}`
    } else {
        resp3.innerText = `Notas de R$10= 0`
    }

    e.preventDefault()
})