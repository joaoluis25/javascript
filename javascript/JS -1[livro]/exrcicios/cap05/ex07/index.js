const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const valor = Number(frm.inNum.value) 
    let divisor = 0
    for (let i = 2; i <= valor / 2; i++){
        if (valor % i == 0){
            divisor = 1
            break
        }
    }
    if (valor > 1 && !divisor){
        resp.innerText = `${valor} é primo.`
    } else {
        resp.innerText = `${valor} não é primo.`
    }


    /*

    PRIMEIRA FORMA DE FAZER ESSE TESTE LOGICO(LIMITADA)

    for (let i = 1; i <= valor; i++){
        if (valor % i == 0){
            divisor++
        } 
        }
        if (divisor == 2){
            resp.innerText = `${valor} é primo.`
        } else {
            resp.innerText = `${valor} não é primo.`
        }
    */
})