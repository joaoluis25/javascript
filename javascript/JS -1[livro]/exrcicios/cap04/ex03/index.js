const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit' , (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const altura = Number(frm.iAlt.value)
    const masculino = frm.iMasc.value

    // abreviando if...else com operador ternario
    const peso = masculino ? 22*Math.pow(altura ,2) : 21 * Math.pow(altura, 2 )
    resp.innerText = `${nome} seu peso ideal é de ${peso.toFixed(3)}kg.`
})
