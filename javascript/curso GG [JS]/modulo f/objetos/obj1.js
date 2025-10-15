let amigo = {nome: 'joao', sexo: 'm', idade: 30,
    anos(i=0){
        console.log('envelheceu')
        this.idade += i
    }
}

amigo.anos(5)
console.log(`O ${amigo.nome} tem ${amigo.idade} anos.`)