import { IClassWork } from "../../core/iClassWork";

// © Dove Programming 2022
// Clase - Febrero 10
//
// Se aprendera que es la programacion, como se piensa en la programacion y que cosas
// debes tener en cuenta a la hora de programar.
//
// Para la clase de hoy vamos a aprender que es una variable, tipos de datos, asignaciones.
// Tambien aprenderas que es una funcion, los parametros de una funcion y el resultado de una funcion.
//
// La meta puntual de hoy sera que domines al 100% el uso de variables y funciones, que son la base
// de la programacion. Tambien veremos condicionales con los cuales puedes hacer flujos basicos

class SubmitClassWork extends IClassWork {
  // Por favor, rellena la siguiente funcion con lo que se te pide.
  //
  // Ten en cuenta que el evaluador tomara unicamente lo que se te haya indicado,
  // por lo que si haces algun trabajo adicional o haces algo que no se pide, la
  // calificacion sera negativa.
  exercise(): void {
    // EJERCICIO:
    // a. Se pide crear cuatro variables, de la siguiente forma:
    //      1. Una variable llamada 'myFirstPet', que tenga dentro un <string> y que su valor sea el nombre de tu primera mascota.
    //      2. Una variable llamada 'myCurrentAge', que tenga dentro un <number> y que su valor sea tu edad actual.
    //      3. Una variable llamada 'imOfAge', que tenga dentro un <boolean> y que su valor sea 'true' si eres mayor de edad (+18), de lo contrario 'false'.
    //      4. Una variable llamada 'currentDate', que tenga dentro un <Date> y que su valor sea la fecha actual.
    // b. Editar la funcion imOfAge() que esta abajo, debe tener el siguiente comportamiento:
    //      - Recibe como parametro 'age', el cual es un <number> e indica tu edad. La funcion debe devolver un tipo de dato <boolean>.
    //      - Si 'age' es mayor o igual a 18, la funcion retornara 'true'.
    //      - Si 'age' es menor a 18, la funcion retornara 'false'.
    // c. Crear una nueva variable 'imOfAgeCalculated', la cual va a tener como valor el resultado de llamar a la funcion 'this.imOfAge(myCurrentAge)'.
    // d. El resultado de la funcion coincide con lo que pusiste inicialmente en el punto a?

    const myFirstPet = 'Tobias';
    const myCurrentAge = 20;
    const imOfAge = true;
    const currentDate = new Date();

    // No toques la siguiente linea, es para calificarte :)
    this.evaluate(myFirstPet, myCurrentAge, imOfAge, currentDate);
  }

  // Esta es la funcion que debes editar en el punto b.
  imOfAge(age: number): boolean {
    if ( age >= 18 ) {
      return true;
    } else {
      return false;
    }
  }

  // Por favor no tocar esta funcion
  // Se usa para emitir tu calificacion
  evaluate(
    myFirstPet: any,
    myCurrentAge: any,
    imOfAge: any,
    currentDate: any
  ): void {
    let score = 0;
    try {
      if (
        myFirstPet === null ||
        myCurrentAge === null ||
        imOfAge === null ||
        currentDate === null
      ) {
        throw new Error(
          "No has completado las variables, revisa si alguna te falta por llenar."
        );
      }
      score += 1.25;
      if (
        typeof myFirstPet !== "string" ||
        typeof myCurrentAge !== "number" ||
        typeof imOfAge !== "boolean" ||
        typeof currentDate !== "object"
      ) {
        throw new Error(
          "El tipo de dato de alguna de las variables no es correcto, revisa bien que el tipo de dato sea el indicado."
        );
      }
      score += 1.25;
      if (
        this.imOfAge(17) !== false ||
        this.imOfAge(18) !== true ||
        this.imOfAge(19) !== true
      ) {
        throw new Error(
          "La funcion 'imOfAge' tiene un comportamiento no deseado, por favor revisala."
        );
      }
      score += 1.25;
      if (
        this.imOfAge(myCurrentAge) !== imOfAge
      ) {
        throw new Error(
          "El resultado de la funcion no coincide con lo que escribiste en la variable inicial."
        );
      }
      score += 1.25;
    } catch (error) {
      console.log(error);
    }
    console.log('Tu calificacion final es: ', score);
  }
}


const classwork = new SubmitClassWork();
classwork.exercise();