import { IClassWork } from "../../core/iClassWork";

// © Dove Programming 2022
// Clase - Febrero 22
//
//
// Condicionales y ciclos
//
// En la clase de hoy aprenderemos que es un condicional, las sentencias booleanas, como usarlas y que es un ciclo.
// Aprenderemos los distintos tipos de usos de los ciclos con un ejercicio simple.
//
// El objetivo de la clase es que entiendas el uso de los condicionales if, los ciclos for y la recursividad
// para elaborar procesos repetitivos.

class SubmitClassWork extends IClassWork {
  // Por favor, rellena la siguiente funcion con lo que se te pide.
  //
  // Ten en cuenta que el evaluador tomara unicamente lo que se te haya indicado,
  // por lo que si haces algun trabajo adicional o haces algo que no se pide, la
  // calificacion sera negativa.
  exercise(): void {
    // EJERCICIO:
    // a. Se pide crear una funcion llamada 'getAllEvenNumbers( limit: number )' que se comporte de la siguiente forma:
    //      1. Recibe un parametro 'limit', que es de tipo <number> e indica el limite del array que vamos a generar.
    //      2. La funcion va a crear un array vacio, y con ayuda de un ciclo for va a calcular todos los numeros que sean pares desde cero hasta el 'limit'.
    //      3. Dentro del ciclo for se va a agregar un condicional, si el numero es par lo agregara al array.
    //      4. Finalmente retornara el array, este debe tener todos los numeros pares desde cero hasta el limit.
    //      5. Si el parametro 'limit' es menor o igual a 0, la funcion debera un array vacio.

    // No toques la siguiente linea, es para calificarte :)
    this.evaluate();
  }

  // Esta es la funcion que debes editar en el punto a.
  getAllEvenNumbers(limit: number): Array<number> {
    return [];
  }

  // Por favor no tocar esta funcion
  // Se usa para emitir tu calificacion
  evaluate(): void {
    let score = 0;
    try {
      const result: Array<number> = this.getAllEvenNumbers(100);
      if (result.length === 0) {
        throw new Error(
          "La funcion devuelve un array vacio, por favor revisala."
        );
      }
      score += 1.25;
      if (result.length !== 50) {
        throw new Error(
          "La funcion no esta devolviendo la cantidad de datos que se requieren, por favor revisala."
        );
      }
      score += 1.25;
      result.forEach((i) => {
        if (i % 2 !== 0) {
          throw new Error(
            "Uno de los datos dentro del array no es par, por favor verifica que el condicional este bien"
          );
        }
      });
      score += 1.25;
      const resultEmpty: Array<number> = this.getAllEvenNumbers(0);
      if (resultEmpty.length !== 0) {
        throw new Error(
          "Si el parametro es cero, no esta devolviendo un array vacio."
        );
      }
      score += 1.25;
    } catch (error) {
      console.log(error);
    }
    console.log("Tu calificacion final es: ", score);
  }
}

const classwork = new SubmitClassWork();
classwork.exercise();
