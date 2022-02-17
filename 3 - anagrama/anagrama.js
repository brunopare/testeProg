/*
Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. 
Para ajudar Débora, construa um algoritmo que informe 
qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

Possui no mínimo 6 caracteres.
Contém no mínimo 1 número.
Contém no mínimo 1 letra em minúsculo.
Contém no mínimo 1 letra em maiúsculo.
Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+*/

const senha = prompt('DIGITE SUA SENHA: ')

const regexNumero  = /\d/
const regexLetraM = /[A-Z]/
const regexLetram = /[a-z]/ 
const regexSpecial = /[$&+,:;=?@#|'<>.^*()%!-]/


if (senha.length < 6){
    x = 6 - senha.length
    console.log(`SENHA PRECISA TER NO MÍNIMO 6 CARACTERES FALTAM ${x} CARACTERES` )

}else if (regexNumero.test(senha) === false){
    console.log('SENHA PRECISA TER PELO MENOS UM NÚMERO ')

}else if (regexLetraM.test(senha)=== false){
        console.log('SENHA PRECISA TER PELO MENOS UMA LETRA MAIÚSCULA')

}else if (regexLetram===false){
        console.log('SENHA PRECISA TER PELO MENOS UMA LETRA MINÚSCULA')

}else if (regexSpecial.test(senha) === false){
        console.log('SENHA PRECISA TER PELO MENOS UM CARACTERE ESPECIAL')
}else{
    console.log('SENHA VALIDADA')
}

