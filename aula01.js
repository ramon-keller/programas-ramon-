

console.log("Olá Mundo!");
console.log("Bem vindos ao módulo 1!!!");

// prompt("Digite seu nome aqui: ");

// let nomeCompleto = "Alexandre Russi 1";
// let nomecompleto = "Alexandre Russi 2";

// console.log(nomecompleto);

var nomeCompleto = prompt("Digite seu nome completo: ");
var endereco = prompt("Digite seu endereço: ");
var turma = prompt("Digite sua turma: ");

var mensagem = "O " + nomeCompleto + " mora no endereço " + endereco + " e está matriculado na turma " + turma;

var mensagem2 = `O ${nomeCompleto} mora no endereço ${endereco} e está matriculado na turma ${turma} -- msg2`;


// var mensagemBruno = `O , + ${nomeCompleto} + "mora no endereço " + endereco`;


console.log(mensagem2);


// TIPOS DE VARIÁVEIS

// Texto -> String
let nome = "Alexandre";
console.log(nome);

let fraseGigante = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies vestibulum nisl, vitae pulvinar libero pulvinar ut.";
console.log(fraseGigante);

// NÚMEROS

// Inteiros
let idade = 22;
console.log(idade);

// Decimais - Float ou Double
let rendaMensal = 1234.56
console.log(rendaMensal);

// Booleano -> Verdadeiro ou Falso -> True or False

// Maior que (>)
// Menor que (<)

// Maior ou igual que (>=)
// Menor ou igual que (<=)

// Valor igual que (==)
// Valor e tipo igual que (===)

// let numero1 = 5;
// let numero2 = "5";

// let teste2 = numero1 === numero2;

// console.log(teste2);

// typeof(numero2);


// typeof(rendaMensal);

// Arrays -> Listas

let listaCompras = ["Maçã", "Notebook", "Celular"];
console.log(listaCompras);
console.log(listaCompras[1]);

let listaNumeros = [10, 30.8, 60, 90.5];
console.log(listaNumeros);
console.log(listaNumeros[3]);


let frase = "Oi"

let listaMisturada = [
  "Maçã", 
  `${frase}, tudo bem?`, 
  "Celular", 
  35.3, 
  false, 
  5==="5"
];

console.log(listaMisturada);
console.log(listaMisturada[4]);

typeof(listaMisturada);

// OPERAÇÕES MATEMÁTICAS

let numero1 = 2;
let numero2 = 2;

let soma = numero1 + numero2;
let concatenar = "2" + 2;

console.log(soma);
console.log(concatenar);
// typeof(concatenar);

console.log("-----------");

let num1 = 10;
let num2 = 5;

console.log(2 * 3);

let multiplicacao = num1 * num2;
console.log(multiplicacao);

let subtracao = num1 - num2;
console.log(subtracao);

let divisao = num1 / num2;
console.log(divisao);

console.log(5 != "5");
