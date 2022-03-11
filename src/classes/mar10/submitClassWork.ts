import { IClassWork } from "../../core/iClassWork";

// © Dove Programming 2022
// Clase - Marzo 10
//
//
// Introduccion a POO (Programacion Orientada a Objetos)
//
// En la clase de hoy daremos una introducción al paradigma de programacion POO,
// que nos va a ser util para aprender a hacer codigo escalable, facil de mantener y con herramientas
// muy poderosas a la hora de crear aplicaciones de cualquier uso.
// 
// El paradigma nos extiende el uso de lo ya aprendido hasta ahora en el curso, agrupando el codigo
// para usarlo de forma independiente en cualquier parte. Este paradigma es uno de los mas usados
// en el desarrollo de software.

class SubmitClassWork extends IClassWork {
  // Por favor, rellena la siguiente funcion con lo que se te pide.
  //
  // Ten en cuenta que el evaluador tomara unicamente lo que se te haya indicado,
  // por lo que si haces algun trabajo adicional o haces algo que no se pide, la
  // calificacion sera negativa.
  exercise(): void {
    // Ejercicio:
    // 
    //    Mas abajo en este archivo esta creada la clase <Carro>.
    //    Crear un objeto a partir de esta clase y realizar las siguientes operaciones:
    //
    //        1. Asignarle una marca, un color y un modelo.
    //        2. Encender el carrito.
    //        3. Mover el carro 70 km.
    //        4. Imprimir en consola los km recorridos por el carrito.
    //        5. Mover el carro otros 39 km.
    //        6. Imprimir en consola los km recorridos nuevamente.
    //        7. Imprimir las especificaciones del carrito en consola usando el metodo <imprimirCarrito>
    // 

    const miCarrito = new Carro();

    // No toques esta linea, es para calificarte :)
    this.evaluate(miCarrito);
  }


  // Por favor no tocar esta funcion
  // Se usa para emitir tu calificacion
  evaluate(carro: Carro): void {
    let score = 0;
    try {
      if ((carro.marca === undefined) || (carro.marca === null) || (carro.marca === '')) {
        throw new Error(
          "El atributo 'Marca' no esta definido"
        );
      }
      score += 1.25;
      if ((carro.color === undefined) || (carro.color === null) || (carro.color === '')) {
        throw new Error(
          "El atributo 'Color' no esta definido"
        );
      }
      score += 1.25;
      if ((carro.modelo === undefined) || (carro.modelo === null) || (carro.modelo === 0)) {
        throw new Error(
          "El atributo 'Modelo' no esta definido"
        );
      }
      score += 1.25;
      if ( carro.obtenerTotalKmRecorridos() != 109 ) {
        throw new Error(
          "No has movido el carrito correctamente"
        );
      }
      score += 1.25;
    } catch (error) {
      console.log(error);
    }
    console.log("Tu calificacion final es: ", score);
    return;
  }
}

class Carro {
  // Creacion de atributos publicas
  public marca: string;
  public color: string;
  public modelo: number;
  // Creacion de atributos privados
  private _estaEncendido = false;
  private _kmRecorridos = 0;

  constructor(marca: string, color: string, modelo: number) {
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
  }

  encender(): void {
    console.log('Run run ruuuun, me estoy encendiendo');
    this._estaEncendido = true;
    return;
  }

  mover(kmParaRecorrer: number): void {
    if (!this._estaEncendido) {
      console.log('No me puedo mover, no estoy encendido aun, enciendeme :(');
      return;
    }
    console.log(`Me estoy moviendo ${kmParaRecorrer} km, ñaaaaaa`);
    this._kmRecorridos += kmParaRecorrer;
  }

  obtenerTotalKmRecorridos(): number {
    return this._kmRecorridos;
  }

  imprimirCarrito(): void {
    console.log(`
    Soy el siguiente carrito:
      Marca: ${this.marca}
      Modelo: ${this.modelo}
      Color: ${this.color}
    `)
  }
 }

const classwork = new SubmitClassWork();
classwork.exercise();
