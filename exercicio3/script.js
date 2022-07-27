//parte 1
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"`
console.log(frase);

//parte 2
let frase2 
frase2 = frase.replaceAll("verde","rosa").replaceAll("azul","laranja")
console.log(frase2);

//parte 3
let frase3
frase3 = frase2.replaceAll("mas não deixe o gato sair", "mas não deixe o gato sair".toUpperCase());
console.log(frase3);