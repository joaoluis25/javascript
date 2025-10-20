const frm = document.querySelector('form')
const resp1 = document.querySelector('h3#resp1')
const resp2 = document.querySelector('h3#resp2')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const ladoA = Number(frm.inA.value)
    const ladoB = Number(frm.inB.value)
    const ladoC = Number(frm.inC.value)

    if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
        resp1.innerText = 'Os lados formam um triangulo verdadeiro!'

         if (ladoA === ladoB && ladoB === ladoC){
             resp2.innerText = 'Tipo do triangulo: EQUILATERO'
         } else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        resp2.innerText = 'Tipo do triangulo: ISOCELES'
         } else {
             resp2.innerText = 'Tipo de triangulo: ESCALENO'
         }
    } else {
        resp1.innerText = 'Esses lados não formam um triangulo!'
        resp2.innerText = ''
    }
})