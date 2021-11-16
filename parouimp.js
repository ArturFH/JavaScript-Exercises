function parouimp(num) {
   if(num%2==0){
    return 'par'
  } else{
    return 'impar'
  }
   
}
let num2 = 5 //Coloque um número para ver se é par ou impar
let num = parouimp(num2)

if(num == 'par'){
  console.log(`O número ${num2} é par!`)
} if(num == 'impar'){
  console.log(`O número ${num2} é impar!`)
}