// let salarioatual = +prompt ('digite o salario do colaborador');
// console.log (salarioatual);

// let percentual = 0;

// if (salarioatual<=280)
// {
// percentual =20/100;
// console.log (percentual);
// }

// else if (salarioatual<=700)
// {
// percentual = 15/100;
// cosnsole.log (percentual);
// }

// else if (salarioatual<=1500)
// {
// percentual = 10/100;
// console.log (percentual);
// }

// else 
// {
//   percentual = 5/100;
// console.log (percentual);
// }


// let aumento  = salarioatual * percentual
// console.log (aumento);

// let novosalario = salarioatual + aumento
// console.log ('novosalario : R$'  + novosalario.toFixed(2) );





// EXERCICIO 02

// let numeroaleatorio = math.floor (math.rondom()*11);
// let numerousuario = +prompt("digite um numero entre 0 e 10");

// if (numeroaleatorio === numerousuario)
// [
//   console.log ('voce acertou');

// ]


// else
// {
//   console.log ('voce errou ' + numero aleatorio);
// }






// EXERCICO 03

// DESAFIO 3
// // DESAFIO 3

// let valorSaque = +prompt("Digite o valor do saque entre R$ 10 e R$ 600: ");

// // 300 -> qtas notas de 100 eu preciso?

// // 300 / 100 = 3 notas


// let qtdNotasCem = Math.trunc(valorSaque / 100);
// let totalCem = 100 * qtdNotasCem;

// valorSaque = valorSaque - totalCem;

// // 399 - 300 = 99



// let qtdNotasCinquenta = Math.trunc(valorSaque / 50);
// let totalCinquenta = 50 * qtdNotasCinquenta;

// // 99 - 50 = 49

// valorSaque = valorSaque - totalCinquenta;


// let qtdNotasDez = Math.trunc(valorSaque / 



// FUNÇAO   
// FUNÇAO   
// FUNÇAO   
// FUNÇAO   
// FUNÇAO   
// FUNÇAO   
// FUNÇAO   
// FUNÇAO   


// function olamundo()
// {
// console.log ('ola mundo');
// }
// Façam uma função que verifica a idade digitada pelo usuário (verifica se é maior de idade ou não).



// function idade() 
// {

//   let idade = +prompt ('digite sua idade');

//   if (idade<=18)
//   {
//   console.log ('sou menor de idade');
//   }
//   else if (idade>=18)
//   {
//   console.log ('sou maior de idade');
//   }
// }

// idade();




// functio verificarlogin (email , senha)
// {

//   let imail
//   let senha

//   if (email === "blue@.com && senha === "123")
//   console.log ('vc acertou');

//   else
//   {
//     console.log (' senha incorreta')
//   }
// // }

//  function calculadora(operacao, numero1, numero2)
// {

// if (operacao === '+' )
// {
// console.log (numero1 + numero2);
// }


// else if (operacao === '-' )
// {
// console.log (numero1 - numero2);
// }



// let operacao =prompt ("escolha uma operacao + ou - ");
// let n1 = +prompt('dig um n');
// let n2 = +prompt('dig um n');


//  function calculadora(operacao, numero1, numero2)


 function calculadora(operacao, numero1, numero2)
{
  if (operacao === "+")
  {
    console.log(numero1 + numero2);
  }
  else if (operacao === "*")
  {
    console.log(numero1 * numero2);
  }
}

let operacao = prompt("Digite uma operação (+ ou *)");
let numero1 = +prompt("Digite o primeiro número: ");
let numero2 = +prompt("Digite o segundo número: ");

calculadora(operacao, numero1, numero2);