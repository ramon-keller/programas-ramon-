console.log ("Responda as perguntas abaixo com ('sim' ou 'nao') e iremos descobrir se você é CULPADO ou INOCENTE");

var pergunta1 = prompt("Telefonou para a vítima?");
var pergunta2 = prompt("Esteve no local do crime?");
var pergunta3 = prompt("Mora perto da vítima?");
var pergunta4 = prompt("Devia para a vítima?");
var pergunta5 = prompt("Já trabalhou com a vítima?");

var respostasim = 0
var respostanao = 0

if (pergunta1 ==='sim')
{
respostasim++
}

else 
{
  respostanao++
}

if (pergunta2 ==='sim')
{
respostasim++
}

else 
{
  respostanao++
}

if (pergunta3 ==='sim')
{
respostasim++
}

else 
{
  respostanao++
}

if (pergunta4 ==='sim')
{
respostasim++
}

else 
{
  respostanao++
}

if (pergunta5 ==='sim')
{
respostasim++
}

else 
{
  respostanao++
}

console.log (`Você teve ${respostasim} sim e ${respostanao} nao, sendo assim você é considerado:`);

if (respostasim === 2 )
{
  console.log ('suspeita')
}

else if (respostasim === 3 )
 {
  console.log ('cumplice')
}

else if (respostasim === 4 )
 {
  console.log ('cumplice')
}

else if (respostasim === 5  ) 
{
  console.log ('assasino')
}

else 
{
  console.log ("inocente")
}

________________-__


console.log ('Você está preparado para descobrir quem você é !!');

console.log ('responda o quetionario abaixo com Sim ou Não');

let resultado = 0;
let resultadonao= 0;

let resposta1 = prompt ('Telefonou para a vitima?');
if(resposta1==="sim")
{
resultado++
}
else
{
resultadonao++
}

let resposta2 = prompt ('Esteve no local do crime ?');
if(resposta2==="sim")
{
resultado++
}
else
{
resultadonao++
}

let resposta3 = prompt ('Mora perto da vitima ?');
if(resposta3==="sim")
{
resultado++
}
else
{
resultadonao++
}

let resposta4 = prompt ('Devia para a vitima ?');
if(resposta4==="sim")
{
resultado++
}
else
{
resultadonao++
}

let resposta5 = prompt ('Já trabalhou com a vitima ?');
if(resposta5==="sim")
{
resultado++
}
else
{
resultadonao++
}

console.log (`Você teve ${resultado} sim e ${resultadonao} nao, sendo assim você éconsiderado:`);

if (resultado === 2 )
{
  console.log ('Suspeita')
}
else if (resultado === 3 ) 
{
  console.log ('Cumplice')
}

else if (resultado === 4 )
 {
  console.log ('Cumplice')
}
else if (resultado === 5  ) 
{
  console.log ('Assasino')
}

else
{
  console.log ("Inocente")
}