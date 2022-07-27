// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
// console.log(minhaString);
// console.log(`Quantidade de caracteres da variável com os espaços: ${minhaString.length}`);

// const minhaStringSemEspaco = minhaString.trim()
// console.log(minhaStringSemEspaco);
// console.log(`Quantidade de caracteres da variável sem os espaços: ${minhaStringSemEspaco.length}`);

// const minhaStringSubstituida = minhaStringSemEspaco.replaceAll("________", "sticioso")
// console.log(`Variável com a substituição: 
// ${minhaStringSubstituida}`);


let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
console.log(minhaString);
console.log(`Quantidade de caracteres da variável com os espaços: ${minhaString.length}`);

minhaString = minhaString.trim();
console.log(minhaString);
console.log(`Quantidade de caracteres da variável sem os espaços: ${minhaString.length}`);

minhaString = minhaString.replaceAll("________", "sticioso");
console.log(`Variável com a substituição: 
${minhaString}`);