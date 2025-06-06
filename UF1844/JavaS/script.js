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

// sort o bucle for, buscar otra forma//

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

// buscar otra forma//

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
// buscar otra forma//


function calFactorial() {
  const input = document.getElementById("factoriar").value;
  const numero = paseInt(input);
  let resultado = 1;
  
  for (let i = 1; i <= numero; i++) {
      resultado *= i;
  }
    document.getElementById("calcularFactorial").textContent = "El factorial de " + numero + " es: " + resultado;
}

/* recursividad 
function funFactorial(n) {
  
  if (n == 0)    {
  return 1;
  } else {
  return n * funFactorial(n - 1);
}

function (calFactorial) {
const input = document.getElementById("factoriar").value;
const numero = paseInt(input);
document.getElementById("calcularFactorial").textContent = funFactorial(numero);


}


*/

function contarPalabras() {
  const input = document.getElementById("contar").value;
  if (input == "") {
    document.getElementById("conteo").textContent = "Es cero ";
  } else {
  let cantidad = input.trim().split(" ").length;
  console.log(input.trim().split(" "));
  document.getElementById("conteo").textContent = "Cantidad de palabras: " + cantidad;
}
}


/* 11 */
function contarLet() {
  const input = document.getElementById("contarLetras").value;
  const texto = input.replace(/\s+/g, '').toLowerCase();
  const conteo = {};

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra >= 'a' && letra <= 'z') {
      if (conteo[letra]) {
        conteo[letra]++;
      } else {
        conteo[letra] = 1;
      }
    }
  }

  document.getElementById("contarLetra").textContent = "Conteo de letras: " + JSON.stringify(conteo);
}
/* revisar otra forma*/

function eliminarCar() {
  const input = document.getElementById("eliminarCaracteres").value;
  let limpio = "";
  const permitidos = "abcdefghijklmnopqrstuvwxyzáéíóúüñABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜÑ0123456789";

  for (let letra of input) {
    if (permitidos.includes(letra)) {
      limpio += letra; //concatenar//
    }
  }

  document.getElementById("eliminarCaracteresEspeciales").textContent = "Texto limpio: " + limpio;
}

function capPalabras() {
  const input = document.getElementById("capitalizarPalabras").value;
  const mayusculas = input.split(" ");
  let capitalizar = "";
  for (let i = 0; i < mayusculas.length; i++) {
    if (mayusculas[i].length > 0)
    {
      capitalizar += mayusculas[i][0].toUpperCase() + mayusculas[i].slice(1) + " ";
    }
  }
  document.getElementById("capitalizar").textContent = "Texto convertido a mayúsculas: " + capitalizar;
}

 function inPalabras() {
  const input = document.getElementById("invertirPalabras").value;
  const inversion = input.split(" ").reverse().join(" ");
  document.getElementById("invertir").textContent = "Texto invertido: " + inversion;
 }

/* function inPalabras() {
  const input = document.getElementById("invertirPalabras").value;
  const inversion = "";
  for (let i =input.length - 1; i >= 0; i--) {
    inversion += input[i];
  }
    document.getElementById("invertir").textContent = "Texto invertido: " + inversion;
*/

function elEspacios() {
  const input = document.getElementById("eliminarEspacios").value;
  const espacios = input.trim();
  document.getElementById("eliminar").textContent = "Texto sin espacios: " + espacios;
}

function contOcurrencias() {
  const texto = document.getElementById("contarOcurrencias").value;
  const palabra = document.getElementById("palabraOcurrencias").value.trim();
  let contador = 0;

  const palabras = texto.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].toLowerCase() === palabra.toLowerCase()) {
      contador++;
    }
  }

  document.getElementById("resultadoOcurrencias").textContent =
    'La palabra "' + palabra + '" aparece ' + contador + " veces.";
}

 function buscarReemplazo() {
  const input = document.getElementById("cadenaTexto").value;
  const busqueda = document.getElementById("buscar").value.trim();
  const reemplazar = document.getElementById("reemplazo").value.trim();
  let contador = 0;

if (busqueda === "") {
  document.getElementById("resultadoReemplazo").textContent = "Introduce la palabra a buscar.";
    return;
  }

  const palabras = input.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].toLowerCase() === busqueda.toLowerCase()) {
      palabras[i] = reemplazar;
    }
  }
  const resultado = palabras.join(" ");
  document.getElementById("resultadoReemplazo").textContent =
   "Resultado: " + resultado;
}

function duplicadoCadena() {
  const input = document.getElementById("duplicaCadena").value;
  const cadenaa = input.split(" ");
  const duplicado = [...new Set(cadenaa)];
  document.getElementById("resultadoDuplicado").textContent = "Sin duplicados: " + duplicado.join(" ");
}

function mayusMinus() {
  const input = document.getElementById("letrasMM").value;
  let mayusculas = 0;
  let minusculas = 0;

  for (let i = 0; i < input.length; i++) {
    const letra = input[i];
    if (letra >= 'A' && letra <= 'Z' || letra === 'Ñ' || letra === 'Á' || letra === 'É' || letra === 'Í' || letra === 'Ó' || letra === 'Ú' || letra === 'Ü') {
      mayusculas++;
    } else if (letra >= 'a' && letra <= 'z' || letra === 'ñ' || letra === 'á' || letra === 'é' || letra === 'í' || letra === 'ó' || letra === 'ú' || letra === 'ü') {
      minusculas++;
    }
  }

  document.getElementById("resultadoMayusMinus").textContent = "Conteo mayúsculas: " + mayusculas + " Conteo minúsculas: " + minusculas;

}

function convertirCamel (){
  const input = document.getElementById("camelCase").value;

}