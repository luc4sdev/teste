// Questão 2 

function inverte(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

const stringOriginal = "Programador";
const stringInvertida = inverte(stringOriginal);

console.log("String Original: " + stringOriginal);
console.log("String Invertida: " + stringInvertida);
