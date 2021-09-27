Exercico 01 

let frase = "Os limites só existem se você os deixar existir.(goku)".
let frase2 = frase.substring{9};
console.log (frase2);



Exercicio 02

let frase = prompt ('digite uma frase ');
let fraseconvertida = frase.toUpperCase();  
console.log (fraseconvertida);



exercico 03

let nome = prompt ('digite seu nome ');
let endereço = prompt ('digite seu endereço');
let hob = prompt ('digite seu hob');

let nomeconvertido = nome.toUpperCase();
console.log (nomeconvertido);

let endereçoconvertido = endereço.toLowerCase();
console.log (endereçoconvertido);

let hobconvertido = hob[0].toUpperCase()
let hobconvertido2 = hob.substring(1).toLowerCase();
console.log (hobconvertido + hobconvertido2 );



Exercicio 04

let numero = prompt ('digite um numero');

if (numero % 2==0)
{
console.log ( numero);
}



Exercicio 7 

let sexo = prompt ('digite M MAsculino ou F - Feminino ');
if (sexo === 'm'){
  console.log ('m-msculino');
}

else if (sexo === 'F'){
  console.log ('f - feminino');
}
else{
  console.log ('sexo invalido');
}

Exercico 08

let nota = +prompt ('Digite uma nota entre 0 e 10:');

if (nota<6)
{
  console.log ('Sua nota é F');
}

else if(nota >= 6 && nota < 7)
{
  console.log ('Sua nota pe é D');
}

else if (nota >=7 && nota < 8)
{
console.log('Sua Nota é C');
}

else if (nota >=8 && nota< 9)
{
console.log ('Sua nota é B');
}

else if (nota >=9 && nota< 10)
{
console.log ('Sua nota é A');
}


else 
{
console.log ('nota invalida , digite outra vez ');
}