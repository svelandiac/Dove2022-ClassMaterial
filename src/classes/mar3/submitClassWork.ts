import { IClassWork } from "../../core/iClassWork";

// © Dove Programming 2022
// Clase - Marzo 03
//
//
// Examen # 1
//
// El examen de hoy tiene como propósito evaluar todos los conocimientos que hemos visto hasta la fecha.
// La nota representara el 20% de la nota final del curso.
// El envio de este examen se debe realizar de forma obligatoria, y no solo por el boton de "Enviar codigo" sino
// se debe realizar el envio de este archivo por email al correo: svelandiacasas@gmail.com
// 
// El plazo maximo para el envio de este examen es el jueves 03 de marzo a las 9:00 pm.
// Cualquier entrega fuera de plazo no se tendra en cuenta.

class SubmitClassWork extends IClassWork {
  // Por favor, rellena la siguiente funcion con lo que se te pide.
  //
  // Ten en cuenta que el evaluador tomara unicamente lo que se te haya indicado,
  // por lo que si haces algun trabajo adicional o haces algo que no se pide, la
  // calificacion sera negativa.
  exercise(): void {
    // Examen:
    // 
    // Se debe hacer unicamente lo que se pide en cada punto, leer muy bien las indicaciones y no entregar cosas adicionales. Si se entrega algo adicional
    // a lo que se pide, se anulara el punto.
    // 
    //      1. Crear una funcion llamada 'punto1'. Esta funcion debe imprimir en consola el string 'Hola mundo'.
    //      2. Crear una funcion llamada 'punto2'. Dentro de esta funcion crear 5 variables, y asignarles cualquier valor. Como minimo debe haber 1 variable
    //         que tenga un string, 1 variable que tenga un booleano y 1 variable que tenga un numero.
    //      3. Crear una funcion llamada 'punto3'. Dentro de esta funcion crear dos variables que tengan numeros, y una tercera variable que sea la comparacion
    //         entre estos dos numeros (puede ser la comparacion que ustedes deseen).
    //      4. Crear una funcion llamada 'punto4'. Dentro de esta funcion, crear un condicional que evalue si el año actual (buscar en Google como obtener la fecha)
    //         es mayor al año 2020. Para esto se debe usar la fecha como el objeto Date(), y obtener el año a partir de ese objeto. Imprimir un mensaje en caso
    //         afirmativo.
    //      5. Crear una funcion llamada 'punto5'. Dentro debera, por medio de ciclos for, calcular la suma de los numeros del 1 al 100 e imprimirla en pantalla.
    //      6. La sucesion de Fibonacci es uno de los ejercicios mas interesantes que existen, ya que pone en practica el uso de ciclos y la logica en cada iteracion.
    //         Para mas informacion acerca de la sucesion de Fibonacci, ver https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci
    //         Crear una funcion llamada 'punto6'. Mediante ciclos for, calcular la sucesion de Fibonacci desde 1 a 1597. Los numeros calculados se deben guardar
    //         en un array, y posteriormente se deben imprimir en pantalla de atras hacia adelante (es decir, el primer numero imprimido en consola debe ser el 1597).

    this.evaluate();
  }

  // Por favor no tocar esta funcion
  // Se usa para emitir tu calificacion
  evaluate(): void {
    // this.punto1();
    // this.punto2();
    // this.punto3();
    // this.punto4();
    // this.punto5();
    // this.punto6();
    return;
  }
}

const classwork = new SubmitClassWork();
classwork.exercise();
