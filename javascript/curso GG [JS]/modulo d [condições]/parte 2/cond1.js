var idade = 67
console.log(`Você tem idade ${idade} anos. `)
if (idade < 16){
    console.log('Não vota!')
} else {
    if (idade < 18 || idade >= 65) {
        console.log('Voto opcional!')
    } else {
        console.log('Votante obrigatorio')
}
}
// ou se pode usar o if dentro do else sem a necessidade de abrir outro bloco ex:
     //else if (idade < 18){
     //    console.log('voto opcional!)
     //} else if (idade >= 18){
     //    console.log('votante obrigatorio!')  
     //}