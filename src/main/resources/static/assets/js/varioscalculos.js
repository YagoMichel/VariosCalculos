function cambiarTextoBoton() {
    const select = document.getElementById("calculos");
    const boton = document.getElementById("boton");

    if (select.value === "primo" || select.value === "par") {
        boton.textContent = "Verificar";
    } else {
        boton.textContent = "Calcular";
    }
}

function realizarCalculo() {
    const numero = parseInt(document.getElementById("numero").value);
    const opcion = document.getElementById("calculos").value;
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "Ingrese un numero.";
        return;
    }

    let texto = "";

    if (opcion === "primo") {
        texto = esPrimo(numero) ? "es primo" : "no es primo";
    } else if (opcion === "par") {
        texto = numero % 2 === 0 ? "es par" : "es impar";
    } else if (opcion === "factorial") {
        texto =  factorial(numero);
    } else if (opcion === "suma_par") {
        texto =  sumaPares(numero);
    } else if (opcion === "suma_impar") {
        texto =  + sumaImpares(numero);
    }
    resultado.textContent = "Resultado: " + texto;
}

function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function factorial(n) {
    if (n < 0) return "No definido";
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function sumaPares(n) {
    let suma = 0;
    for (let i = 2; i <= n; i += 2) {
        suma += i;
    }
    return suma;
}

function sumaImpares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }
    return suma;
}
