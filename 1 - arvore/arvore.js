//Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços.
// A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

const arvore = prompt('Informe o numero: ')

for(let i=1; i<arvore; i++){
    let espaco = arvore - i;
    
    console.log(' '.repeat(espaco)+'*'.repeat(i));
}

