console.log ('Você está preparado para descobrir quem você é !!');

console.log ('Responda o quetionario abaixo com Sim ou Não');

let resultadosim = 0;
let resultadonao= 0;

let resposta1 = prompt ('Telefonou para a vitima?').toUpperCase();
if(resposta1==="SIM")
{
resultado++
}
else
{
resultadonao++
}

let resposta2 = prompt ('Esteve no local do crime ?').toUpperCase();
if(resposta2==="SIM")
{
resultado++
}
else
{
resultadonao++
}

let resposta3 = prompt ('Mora perto da vitima ?').toUpperCase();
if(resposta3==="SIM")
{
resultado++
}
else
{
resultadonao++
}

let resposta4 = prompt ('Devia para a vitima ?').toUpperCase();
if(resposta4==="SIM")
{
resultado++
}
else
{
resultadonao++
}

let resposta5 = prompt ('Já trabalhou com a vitima ?').toUpperCase();
if(resposta5==="SIM")
{
resultado++
}
else
{
resultadonao++
}

console.log (`Você teve ${resultado} sim e ${resultadonao} nao, sendo assim você é considerado:`);

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

