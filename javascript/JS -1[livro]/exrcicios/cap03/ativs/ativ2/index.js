const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNum.value)

    let raiz = Math.sqrt(numero)
    /* 
    primeira forma de se resolver

    if (Number.isInteger(raiz)){
        resp.innerText = `A raiz de ${numero} é igual a ${raiz}.`
    } else {
        window.alert(`Não ha raiz exata para o numero ${numero}. Digite outro valor!`)
    }
    */

    //segunda forma de se resolver:

    if (raiz % 1 == 0){
        resp.innerText = `A raiz de ${numero} é igual a ${raiz}.`
    } else {
        window.alert(`Não ha raiz exata para o numero ${numero}. Digite outro valor!`)

    }

})