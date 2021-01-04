let parImpar = function(num) {
    if (num == 0) {
        return "Error!"
    }
    return num % 2 == 0 ? "El numero es par" : "El numero es impar";
}

console.log(parImpar(0));

console.log(parImpar(1));

console.log(parImpar(8));