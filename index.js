import entradaDados from 'readline-sync';

/* Verificar se é uma letra */
let alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];

let vogais = ["a", "e", "i", "o", "u"];
let letra = false;
console.log("Verificador de vogal");

let dado = entradaDados.question("Digite uma letra: ");
for(let i = 0; i < alfa.length; i++) {
    if(alfa[i] == dado) {
        letra = true;
    }
}

if(letra) {
    let vogalEncontrada = false;
    vogais.forEach(vogal => {
       if(vogal == dado) {
        vogalEncontrada = true;
       }
    });
    
    let resultado = vogalEncontrada ? `A letra ${dado.toUpperCase()} é uma vogal!` : `A letra ${dado.toUpperCase()} é uma consoante!`;
    console.log(resultado);
}

else {
    console.log("Ops... O caracter digitado não é uma letra!");
}
