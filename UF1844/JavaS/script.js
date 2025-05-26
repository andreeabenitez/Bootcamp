function sumArray() {
  const input = document.getElementById("arraySum").value;
  const arr = input.split(",").map(num => Number(num.trim()));
  const suma = arr.reduce((acum, num) => acum + num, 0);
  document.getElementById("result").textContent = "La suma es: " + suma;
}



function sumVocales() {
  const input = document.getElementById("conteoVocales").value;
  const vocales = input.match(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g);
  const cantidad = vocales ? vocales.length : 0;
  document.getElementById("resultado").textContent = "Cantidad de vocales: " + cantidad;
}

/* function sumVocales() {
  const input = document.getElementById("conteoVocales").value;
  const vocalSet = new Set(['a','e','i','o','u','á','é','í','ó','ú','ü',
                            'A','E','I','O','U','Á','É','Í','Ó','Ú','Ü']);
  let cantidad = 0;

  for (const char of input) {
    if (vocalSet.has(char)) {
      cantidad++;
    }
  }

  document.getElementById("resultado").textContent = "Cantidad de vocales: " + cantidad;
}
*/

function numMayor() {
  const input = document.getElementById("numeroMayor").value;
  const numeros = input.split(",").map(num => Number(num.trim()));
  const mayor = Math.max(...numeros);
  document.getElementById("resultadoo").textContent = "El número mayor es " + mayor;
}

// sort o bucle for//

function revCadena() {
    const input = document.getElementById("revertirCadena").value;
    const cadena = input.split("").reverse().join("");
    document.getElementById("resultadooo").textContent = "La palabra invertida " + cadena;
}

function numPares() {
  const input = document.getElementById("paresImpares").value;
  const numeros = input.split(",").map(num => Number(num.trim()));
  const pares = numeros.filter(num => num % 2 === 0);
  const impares = numeros.filter(num => num % 2 !== 0);
  document.getElementById("resultadoPares").textContent = "Pares: " + pares.join(", ");
  document.getElementById("resultadoImpares").textContent = "Impares: " + impares.join(", ");
}



/* function elimDup() {
    const input = document.getElementById("eliminarDuplicados").value;
    const numeros = input.split(",").map(num => Number(num.trim()));
    const duplicado = [...new Set(numeros)];
    document.getElementById("duplicados").textContent = "Sin duplicados: " + duplicado.join(", ");
}

*/

function elimDup() {
    const input = document.getElementById("eliminarDuplicados").value;
    const numeros = input.split(",").map(num => num.trim());
    const duplicado = [...new Set(numeros)];
    document.getElementById("duplicados").textContent = "Sin duplicados: " + duplicado.join(", ");
}
// buscar otra forma//

function palimdro() {
  const input = document.getElementById("palindromo").value;
  const texto = input.replace(/\s+/g, '').toLowerCase();
  const esPalindromo = texto === texto.split('').reverse().join('');
  document.getElementById("resultadoPalindromo").textContent = 
    esPalindromo ? "Es un palíndromo" : "No es un palíndromo";

}

function tablaMult() {
  const input = document.getElementById("multiplicar").value;
  const numero = Number(input.trim());
  let resultado = "";

  if (!isNaN(numero)) {
    for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById("resultadoMultiplicar").innerHTML = resultado;
  } else {
    document.getElementById("resultadoMultiplicar").textContent = "Introduce un número válido.";
  }
}

function calFactorial() {
  const input = document.getElementById("factoriar").value;
  const numero = Number(input.trim());
  let resultado = 1;

  if (!isNaN(numero) && numero >= 0 && Number.isInteger(numero)) {
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    document.getElementById("calcularFactorial").textContent = "El factorial de " + numero + " es: " + resultado;
  } else {
    document.getElementById("calcularFactorial").textContent = "Introduce un número entero positivo.";
  }
}

function contarPalabras(){
  const input = document.getElementById("contar").value;
  const palabras = input.trim().split(/\s+/);
  const cantidad = input.trim() === "" ? 0 : palabras.length;
  document.getElementById("conteo").textContent = "Cantidad de palabras: " + cantidad;
}

function contarLet() {
  const input = document.getElementById("contarLetras").value;
  const texto = input.replace(/\s+/g, '').toLowerCase();

  for (let letra of texto) {
    if (/[a-záéíóúüñ]/i.test(letra)) {
      conteo[letra] = (conteo[letra] || 0) + 1;
    }
  }

  document.getElementById("contarLetra").textContent = "Conteo de letras: " + JSON.stringify(conteo);
}