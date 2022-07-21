function initialize() {
  let name = prompt(`Olá, vamos calcular! Me diga primeiro: qual o seu nome?`)
    
    let numberOne = prompt(`${name}, digite o primeiro número:`)
    let numberTwo= prompt(`${name}, digite o segundo número:`)
    
    numberOne = Number(numberOne)
    numberTwo = Number(numberTwo)
    
    if (numberOne == numberTwo) {
      let one = 1
      let two = 2
      one = Number(one)
      two = Number(two)
    
      let mensage = prompt(
      `Você digitou dois números iguais, deseja continuar? Digite 1 para sim e 2 para não`
      )
    
      if (mensage == two) {
        alert("Tente uma próxima vez")
        initialize()
      } 
    } calculate(numberOne, numberTwo)
}

initialize()

function calculate(numberOne, numberTwo) {
  let sum = numberOne + numberTwo
  let sub = numberOne - numberTwo
  let mult = numberOne * numberTwo
  let div = numberOne / numberTwo
  let rest = numberOne % numberTwo
 
  
  alert(`${name} Os números digitados foram: ${numberOne} e ${numberTwo}`)
  
  alert (`O resultado da adição é: ${sum}` ) 
  alert (`O resultado da subtração é: ${sub}` )
  alert (`O resultado da multiplicação é: ${mult}` )
  alert (`O resultado da divisão é: ${div}` )
  alert (`O resultado do restante da divisão é: ${rest}` )

  if(sum/2 && rest==0) {
    alert("a soma dos dois números é par")

  } else {
    alert("a soma dos dois números é ímpar")
  }
  
}
