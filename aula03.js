console.logc (1 + 1);
console.log ('texto'+ ' trexto');
console.log ('texto' + 1);
console.log (1 + 'texto');
console.log ('10' +'10');

let idade = prompt ('digite sua idade');
console.log (typeof (idade));
console.log ( idadecovertida);



let frase = "oi tudo bem";
let fraseajustada = frase.replace("V","v");
console.log (fraseajusutada);



let idade = +prompt ('digite sua idade');
let condicao = idade >=18;
console.log (condicao);
if (condicao){
  console.log ('Bora tomar uma');
} else {
  console.log ('bora tomar um refrigerante');
}


let idade = +prompt ('digite sua idade');
if (idade >=18) {
  console.log (' bora tomar uma');
} else {
  console.log ('bora tomar um refri');
}

ELSE IF

let escola = prompt('digite o nome da escola');
if (escola === 'blue') 
{
  console.log ('parabens vc é um bluemer');
} 
else if (escola === 'umdemy')
{
  console.log('vai terminar o curso safado');
}
else
{
  console.log('seja feliz');
}


let escola = prompt('digite o nome da escola').tolowerCase();

if (escola === 'blue') 
{
  console.log ('parabens vc é um bluemer');
} 
else if (escola === 'umdemy')
{
  console.log('vai terminar o curso safado');
}
else
{
  console.log('seja feliz');
}