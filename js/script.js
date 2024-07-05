/**
 * @file script.js
 * @description This file contains the JavaScript code for the project.
 * @version 1.0
 * @since 2027-07-04
 */

// Se requiere crear un encriptador de texto que posea las siguientes características:
// 1. El texto encriptado debe utilizar las siguientes llaves de encriptación:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
// 
// Requisitos:
// 1. Debe funcionar solo con letras minúsculas
// 2. No deben ser utilizados letras con acentos ni caracteres especiales
// 3. Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// Por ejemplo:
// "gato" => "gaitober"
// "gaitober" => "gato"
// Se debe realizar utilizando funciones, y buenas prácticas de programación.

// Función para encriptar una palabra en minúsculas
function encriptarPalabra(word) {
    let encryptedWord = word.replace(/e/g, "enter");        // Se reemplaza la letra "e" por "enter"
    encryptedWord = encryptedWord.replace(/i/g, "imes");    // Se reemplaza la letra "i" por "imes"
    encryptedWord = encryptedWord.replace(/a/g, "ai");      // Se reemplaza la letra "a" por "ai"
    encryptedWord = encryptedWord.replace(/o/g, "ober");    // Se reemplaza la letra "o" por "ober"
    encryptedWord = encryptedWord.replace(/u/g, "ufat");    // Se reemplaza la letra "u" por "ufat"
    return encryptedWord;
}

// Función para desencriptar una palabra encriptada
function desencriptarPalabra(word) {
    let decryptedWord = word.replace(/enter/g, "e");        // Se reemplaza la palabra "enter" por "e"
    decryptedWord = decryptedWord.replace(/imes/g, "i");    // Se reemplaza la palabra "imes" por "i"
    decryptedWord = decryptedWord.replace(/ai/g, "a");      // Se reemplaza la palabra "ai" por "a"
    decryptedWord = decryptedWord.replace(/ober/g, "o");    // Se reemplaza la palabra "ober" por "o"
    decryptedWord = decryptedWord.replace(/ufat/g, "u");    // Se reemplaza la palabra "ufat" por "u"
    return decryptedWord;
}

// Función para encriptar un texto capturado desde una caja de texto en un formulario HTML
function encriptarTexto(texto) {
    let palabras = texto.split(" ");
    let textoEncriptado = "";
    palabras.forEach(palabra => {
        textoEncriptado += encriptarPalabra(palabra) + " ";
    });
    return textoEncriptado.trim();
}

// Función para desencriptar una palabra capturada desde una caja de texto en un formulario HTML
function desencriptarTexto(texto) {
    let palabras = texto.split(" ");
    let textoDesencriptado = "";
    palabras.forEach(palabra => {
        textoDesencriptado += desencriptarPalabra(palabra) + " ";
    });
    return textoDesencriptado.trim();
}

// Ejemplo de uso
//let text = "gato";
//let text = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
//let encryptedText = encriptarTexto(text);
//let decryptedText = desencriptarTexto(text);
//console.log(`Texto original: ${text}`);
//console.log(`Texto encriptado: ${encryptedText}`);
//console.log(`Texto desencriptado: ${decryptedText}`);

