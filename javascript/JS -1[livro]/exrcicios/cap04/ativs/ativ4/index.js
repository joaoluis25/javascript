const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    const valor = Number(frm.inNum.value)

    if (valor % 2 == 1){
        resp.innerText = `O valor ${valor} é IMPAR!`
    } else {
        resp.innerText  = `O valor ${valor} é PAR!`
    }
    e.preventDefault()
})