// // alert('deu certo')
// // alert('Maria e Helena')
// function soma(num1,num2){
//  return num1+num2;
// }

// console.log(soma(2,3));

// function areaQuadro(lado){
//     return lado **2
// }
// console.log(areaQuadro(3));

// function areatriangulo(base,altura,){
//     return base*altura/2;
// }
// console.log(areatriangulo(8,5))

// let nome=parseInt(prompt('digite um número'/));
// let nome=parseInt(prompt('digite o segundo número'/));
// let nome=parseInt(prompt('digite o terceiro número'/));
//  function media(valor1,valor2,valor3){
//    return (valor1+valor2+valor3)/3;

//  }  console.log(media(valor1,valor2,valor3));
//  document.write(media(valor1,valor2,valor3));


 let estados = ['Paraná','São Paulo','Rio De Janeiro','Rio Grande Do Sul','Espírito Santo','Santa Catarina','Minas gerais','Acre','Amapá','Amazonas','Pará','Rondônia', 'Roraima','Tocantins','Bahia','Maranhão','Paraíba','Pernambuco','Piauí','Rio Grande Do Norte','Sergipe','Mato Grosso','Mato Grosso Do Sul','Goías','Alagoas','Distrito Federal','Ceará']

 let i=0;

 while (i<estados.length) {
     console.log(i);
     console.log(estados[i]);
   i=i+1; 
   
  }

  let idade =parseInt(prompt('Qual a sua idade?'));
   if (idade>17){
    console.log('Já pode dirigir');

  }
   else{
    console.log('Ilegal dirigir');
  }

