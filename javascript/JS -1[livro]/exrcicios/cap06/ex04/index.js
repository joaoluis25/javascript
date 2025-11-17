const frm = document.querySelector('form')
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')

const pacientes = []

//primeiro evento do formulario [input; 'submit']
frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nome = frm.inNome.value
    pacientes.push(nome)
    let lista = ''
    //for 'tradicional (inicia em 0, enquanto menor que tamanho do array)
    for (let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}.paciente: ${pacientes[i]}\n`
    }

    respLista.innerText = lista
    frm.inNome.value = ''
    frm.inNome.focus()
})

//adiciona um ouvinte do tipo 'click' no button urgencia 
frm.inUrgencia.addEventListener('click', ()=>{
    //verifica se as validações do form estão ok, que no caso seria paciente is required

    if(!frm.checkValidity()){
        alert('Informe o nome do paciente a ser atendido em caracter de urgência.')
        frm.inUrgencia.focus()
        return
    }

    const nome = frm.inNome.value
    pacientes.unshift(nome)
    let lista = ''
    //forEach aplicado sobre array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.paciente: ${paciente}\n`))
    respLista.innerText = lista
    frm.inNome.value = ''
    frm.inNome.focus()
})

//terceiro evento 
frm.inAtender.addEventListener('click', ()=>{
    //se o tamanho do vetor for 0
    if (pacientes.length == 0){
        alert('Não ha pacientes na lista de espera.')
        frm.inNome.focus()
        return
    }
    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ''
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.paciente: ${paciente}\n`))
    respLista.innerText = lista
})