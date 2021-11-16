teste = ['oi','oi2','oi3']//declarando var compostas, com [] e virgulas!

teste.push('oi4')//adiciona um valor a ultima casa disponivel na var

teste[4] = 'oi5' //adiciona um valor a uma casa que você define na var

console.log(teste[4],'- Essa é a 4° casa da var')//começa no zero a enumeração das var ou seja a 1° é a numero 0

console.log('essa var composta tem', teste.length,'casas')//.length mostra o comprimento da váriaveis(quantos valores estão declarados dentro dela) 

//teste.sort() coloca os vetores da var em ordem numérica ex se tava 3 2 1 vira 1 2 3 
let index = teste.indexOf('oi3') //procura o valor dentro das variavéis, ex: procurei o oi3 dentro da var teste, me retornaria 2, pq está na 3° opção.
console.log(`O 3° oi está na posição ${index} da variavel`) //mostra a posição da variavel com o console.log    
