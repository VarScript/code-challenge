/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */



const anagram = (w1, w2) => {
    
    // Words in lowe case
    w1 = w1.toLowerCase();
    w2 = w2.toLowerCase();


     // Words in string
    w1 = w1.split('');
    w2 = w2.split('');

      // Organizate words
    w1 = w1.sort();
    w2 = w2.sort();
    
      // Convert in  string
    w1 = w1.join('');
    w2 = w2.join('');

    if (w1 === w2) return 'Is Anagram' 
    else return 'Is not Anamgram'
}

console.log(anagram('rOma', 'omAr'));
