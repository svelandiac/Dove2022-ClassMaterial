import { IClassWork } from "../../core/iClassWork";

// © Dove Programming 2022
// Clase - Marzo 01
//
//
// Funciones - Parte II
//
// En la clase de hoy retomaremos el concepto de funcion, de una forma un poco mas avanzada.
// El objetivo es que uses las funciones de forma en que resulte especialmente util el encapsulamiento
// de un proceso especifico en un bloque de codigo reusable.
// 
// Para esto, deberas crear funciones y usarlas varias veces para combinar resultados.

class SubmitClassWork extends IClassWork {
  // Por favor, rellena la siguiente funcion con lo que se te pide.
  //
  // Ten en cuenta que el evaluador tomara unicamente lo que se te haya indicado,
  // por lo que si haces algun trabajo adicional o haces algo que no se pide, la
  // calificacion sera negativa.
  exercise(): void {
    // Ejercicio:
    // "La paradoja del cumpleaños es una verdad matemática que establece que en un grupo de apenas
    // 23 personas hay una probabilidad cercana al azar, concretamente del del 50,7%, de que al menos
    // dos de esas personas cumplan años el mismo día." Ref: https://psicologiaymente.com/cultura/paradoja-cumpleanos
    //      
    // Una forma de comprobar esto, es simulando varios intentos, lo que se llamaria por "fuerza bruta".
    // El ejercicio de hoy trata de, mediante funciones, crear muchos de estos intentos sin repetir lineas de codigo,
    // tan solo usando las funciones como bloques que se pueden reusar, creando muchas simulaciones del mismo ejercicio
    // facilmente para poder sacar un numero que nos compruebe esta paradoja.
    //
    // Para esto vamos a necesitar los siguientes ingredientes:
    //    1. Una funcion que nos devuelva un array con 23 numeros (cada uno simulando ser una persona), los numeros seran
    //       escogidos aleatoriamente entre 1 y 365 (simulando ser el dia del cumpleaños)
    //    2. Una funcion que reciba el array generado con la funcion del punto 1, y que devuelva un booleano indicando
    //       si dos de esos numeros son iguales (indicando en nuestra simulacion que cumplen el mismo dia).
    //    3. Una funcion que reciba el numero de repeticiones del experimento que queremos que se hagan, y que haciendo uso de la funcion 
    //       creada en el punto 2, devuelva un numero entero indicando la cantidad de casos en los que si se cumplio la condicion de que 
    //       dos personas cumplan el mismo dia.
    //    4. Una funcion que, usando la funcion creada en el punto 3, repita el experimento con las siguientes cantidades de repeticiones:
    //       < 10, 100, 1000, 10000 >. Para cada uno de los casos, debe imprimir en pantalla el resultado (el numero entero indicando la 
    //       cantidad de casos satisfactorios).
    //    5. ¿Cual fue el resultado?
    //

    // No toques la siguiente linea, es para calificarte :)
    this.test();
    this.evaluate();
  }

  // Retorna un número aleatorio entre min (incluido) y max (excluido)
  getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Funcion del punto 1: No recibe parametros, y devuelve un array con 23 numeros generados aletatoriamente entre 1 y 365.
  generateRandomBirthdays(): Array<number> {
    return [];
  }

  // Funcion del punto 2: Recibe un array de numeros, y devuelve un booleano indicando si dos numeros dentro de ese array son iguales.
  wasParadoxFulfilled(birthdays: Array<number>): boolean {
    return false;
  }

  // Funcion del punto 3: Recibe el numero de repeticiones que queremos que se hagan de este experimento, y devuelve un entero
  // que indica en cuantas de estas repeticiones se cumplio la paradoja
  getSuccessCases(repetitions: number): number {
    return 0;
  }

  // Funcion del punto 4: No recibe parametros, usara la funcion del punto 3 para las siguientes repeticiones: < 10, 100, 1000, 10000 >
  test(): void {
    console.log(`10 repeticiones: ${this.getSuccessCases(10)}/10`);
    console.log(`100 repeticiones: ${this.getSuccessCases(100)}/100`);
    console.log(`1000 repeticiones: ${this.getSuccessCases(1000)}/1000`);
    console.log(`10000 repeticiones: ${this.getSuccessCases(10000)}/10000`);
  }

  calculateProbability(): number {
    const successCases = [];
    const iterations = 100;
    const repetitions = 1000;
    for (let i = 0; i < iterations; i++) {
      successCases.push(this.getSuccessCases(repetitions));
    }
    const probability = successCases.reduce(
      (previous, current) => (previous + current) / repetitions
    );
    const percentage = Math.round(probability * 100 * 100) / 100;
    console.log(
      `La probabilidad calculada del experimento es de ${percentage.toFixed(
        2
      )}%`
    );
    return percentage;
  }

  // Por favor no tocar esta funcion
  // Se usa para emitir tu calificacion
  evaluate(): void {
    let score = 0;
    try {
      const percentageCalculated = this.calculateProbability();
      if (percentageCalculated < 60 && percentageCalculated > 40) {
        score += 5.0;
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Tu calificacion final es: ", score);
  }
}

const classwork = new SubmitClassWork();
classwork.exercise();
