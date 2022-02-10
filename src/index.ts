// © Dove Programming 2022
// Por favor no modificar este archivo, es el inicio de todo el proyecto.
//
// Si quieres trabajar en la clase, te pido por favor vayas a la ruta ./src/classes/
// y trabajes sobre los archivos workspace.ts y submitClassWork.ts.
//
// Este archivo no se debe manipular.
//
// Gracias.

const args = process.argv.slice(2);

// Main function: Se encarga de correr el codigo que hayas trabajado, haciendo la diferenciacion
// entre el codigo que estes editando y el codigo que quieres que se califique.
const main = async (isSubmit: boolean) => {
  // Obtener el nombre de la clase de hoy
  const className = "feb10";

  // Formar la ruta donde estara la compilacion del archivo sobre el que hayas trabajado
  let route = "./classes/" + className;

  // isSubmit verifica si estas enviando el trabajo para calificar o no
  route += (isSubmit) ? '/submitClassWork.js' : '/workspace.js';

  // Importa el codigo correspondiente y lo ejecuta
  await import(route);
};

main(args[0] !== '0');
