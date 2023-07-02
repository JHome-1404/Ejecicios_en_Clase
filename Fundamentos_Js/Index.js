// # VALIDACION DE ENTRADA
const form = document.querySelector(".form");
const input_form = document.querySelector(".input-form");

// $ ELECCION
form.addEventListener("submit", () => {
  let entrada = parseInt(input_form.value);
  validarEntrada(entrada);
});

// $ FUNCION SUBMIT
const validarEntrada = (entrada) => {
  switch (entrada) {
    case 1:
      ejercicio_1();
      break;
    case 2:
      ejercicio_2();
      break;
    case 3:
      ejercicio_3();
      break;
    case 4:
      ejercicio_4();
      break;
    case 5:
      ejercicio_5();
      break;
    case 6:
      ejercicio_6();
      break;
    case 7:
      ejercicio_7();
      break;
    case 8:
      ejercicio_8();
      break;
    case 9:
      ejercicio_9();
      break;
    case 10:
      ejercicio_10();
      break;
    case 11:
      ejercicio_11();
      break;
    case 12:
      ejercicio_12();
      break;
    case 13:
      ejercicio_13();
      break;
    case 14:
      ejercicio_14();
      break;
  }
};

// # TALLER
// *1 Crea una función que tome dos números como argumentos y devuelva su suma.

const ejercicio_1 = () => {
  // $ Variables
  let number_1 = parseInt(prompt("Ingresa Un numero"));
  let number_2 = parseInt(prompt("Ingresa Un numero"));
  // $ Validacion
  if (isNaN(number_1) || isNaN(number_2)) {
    alert("Por favor, Ingresa solo numeros");
    return;
  }
  // $ Ejercicio
  let resultado = number_1 + number_2;
  alert(`El resultado de ${number_1} + ${number_2} = ${resultado} `);
};

// *2 Crea una función que tome una cadena como argumento y devuelva el número de caracteres que tiene.

const ejercicio_2 = () => {
  // $ Variables
  let cadena = prompt("Ingresa un texto sin espacios en blanco");
  let caracteres = cadena.length;
  // $ Ejercicio
  alert(`El numero de caracteres de ${cadena} son ${caracteres}`);
};

// *3 Crea una función que tome un array de números como argumento y devuelva el número más grande.

const ejercicio_3 = () => {
  // $ Variables
  let array = [];
  let answer = parseInt(prompt("De cuantos datos quieres que sea tu cadena"));
  // $ Validacion
  if (answer == 0) {
    alert("Escribe un numero mayor a 0");
    return;
  }
  if (answer < 0) {
    alert("Escribe un numero Positivo");
    return;
  }
  // $ Ejercicio
  for (let i = 0; i < answer; i++) {
    let dato = parseInt(prompt("Escribe un dato numerico"));
    array.push(dato);
  }
  let maxNumber = Math.max(...array);
  alert(`El numero mas grande de ${array} es ${maxNumber}`);
};

// *4 Crea una función que tome una cadena como argumento y devuelva la misma cadena, pero con todas las letras en mayúsculas.

const ejercicio_4 = () => {
  let cadena = prompt("Escribe una cadena de texto");
  alert(cadena.toUpperCase());
};

// *5 Crea una función que tome un objeto como argumento y devuelva un array con todas las claves del objeto.

class objeto {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
}

const ejercicio_5 = () => {
  // $ Variables
  let array = [];
  let nombre = prompt("Ingrese tu nombre");
  let edad = parseInt(prompt("Ingresa tu edad"));
  let genero = prompt("Ingresa tu genero");
  // $ Validacion
  if (isNaN(edad)) {
    alert("Por favor, Ingresa solo numeros");
    return;
  }
  if (edad < 0) {
    alert("Por favor, Ingresa solo numeros Positivos");
    return;
  }
  // $ Ejercicio
  let usuario = new objeto(nombre, edad, genero);
  for (const i in usuario) {
    array.push(`${i}:${usuario[i]}`);
  }
  console.log(array);
};

// *6 Crea una función que tome un array de números como argumento y devuelva un nuevo array con los números ordenados de menor a mayor.

const ejercicio_6 = () => {
  // $ Variables
  let array = [];
  let answer = parseInt(prompt("De cuantos datos quieres que sea tu cadena"));
  // $ Validacion
  if (answer == 0) {
    alert("Escribe un numero mayor a 0");
    return;
  }
  if (answer < 0) {
    alert("Escribe un numero Positivo");
    return;
  }
  // $ Ejercicio
  for (let i = 0; i < answer; i++) {
    let dato = parseInt(prompt("Escribe un dato numerico"));
    array.push(dato);
  }
  let oldArray = [...array];
  let newArray = array.sort((a, b) => a - b);
  alert(`Viejo array: ${oldArray}, Nuevo array: ${newArray}`);
};

// !7 Crea una función que tome dos fechas como argumentos y devuelva el número de días que hay entre ellas.

const ejercicio_7 = () => {
  alert("Sorry =( Ni idea de como resolver este ejercicio");
};

// *8 Crea una función que tome un array de strings como argumento y devuelva un nuevo array con la longitud de cada string.

const ejercicio_8 = () => {
  // $ Variables
  let array = [];
  let answer = parseInt(prompt("De cuantos datos quieres que sea tu cadena"));
  // $ Validacion
  if (isNaN(answer) || answer <= 0) {
    alert("Escribe un numero mayor a 0");
    return;
  }
  // $ Ejercicio
  for (let i = 0; i < answer; i++) {
    let dato = prompt("Escribe un dato");
    array.push(dato);
  }
  let oldArray = [...array];
  let newArray = array.map((e) => {
    return e.length;
  });
  alert(`Viejo array: ${oldArray}, Nuevo array: ${newArray}`);
};

// *9 Crea una función que tome un objeto como argumento y devuelva un nuevo objeto con las mismas claves, pero con los valores invertidos.

const ejercicio_9 = () => {
  // $ Variables
  let array = [];
  let answer = parseInt(prompt("De cuantos datos quieres que sea tu cadena"));
  // $ Validacion
  if (isNaN(answer) || answer <= 0) {
    alert("Escribe un numero mayor a 0");
    return;
  }
  // $ Ejercicio
  for (let i = 0; i < answer; i++) {
    let dato = prompt("Escribe un dato");
    array.push(dato);
  }
  // $ Ejercicio
  let oldArray = [...array];
  let newArray = array.reverse(array).join(" ");
  alert(`Viejo array: ${oldArray}, Nuevo array: ${newArray}`);
};

// *10 Crea una función que tome un número como argumento y devuelva un array con todos los números enteros desde 1 hasta ese número.

const ejercicio_10 = () => {
  // $ Variables
  let numero = parseInt(prompt("Ingresa un Nmero"));
  // $ Validacion
  if (isNaN(numero) || numero <= 0) {
    alert("Escribe un numero mayor a 0");
    return;
  }
  // $ Ejercicio
  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  alert(`El factorial de ${numero} es ${factorial}`);
};

// *11 Crea una función que tome un array de strings como argumento y devuelva un nuevo array con todas las strings en mayúsculas.

const ejercicio_11 = () => {
  // $ Variables
  let array = [];
  let answer = parseInt(prompt("De cuantos datos quieres que sea tu cadena"));
  // $ Validacion
  if (isNaN(answer) || answer <= 0) {
    alert("Escribe un numero mayor a 0");
    return;
  }
  // $ Ejercicio
  for (let i = 0; i < answer; i++) {
    let dato = prompt("Escribe un dato");
    array.push(dato);
  }
  // $ Ejercicio
  let oldArray = [...array];
  let newArray = array.map((e) => {
    return e.toUpperCase();
  });
  alert(`Viejo array: ${oldArray}, Nuevo array: ${newArray}`);
};

// *12.Crea una función que tome dos strings como argumentos y devuelva true si son iguales (sin importar mayúsculas o minúsculas) o false si son diferentes.

const ejercicio_12 = () => {
  // $ Variables
  let cadena_1 = prompt("Escribe una cadena de texto");
  let cadena_2 = prompt("Escribe otra cadena de texto");
  // $ Ejercicio
  if (cadena_1.toLowerCase() == cadena_2.toLowerCase()) {
    alert(`La cadena ${cadena_1} es igual a ${cadena_2} sin importar mayusculas o minusculas`);
  } else {
    alert(`La cadena ${cadena_1} NO es igual a ${cadena_2} sin importar mayusculas o minusculas`);
  }
};

// *13 Crea una función que tome un array de objetos y un string como argumentos y devuelva un nuevo array con todos los objetos que contienen una propiedad con ese string como clave.

// $ Variables
const arrayObjetos = [
  { nombre: "Objeto 1", edad: 20 },
  { nombre: "Objeto 2", ciudad: "Barcelona" },
  { nombre: "Objeto 3", edad: 30 },
  { nombre: "Objeto 4", profesion: "Programador" },
];

// $ Funcion
const filterArray = (array, clave) => {
  return array.filter((objeto) => {
    return objeto.hasOwnProperty(clave);
  });
};

const ejercicio_13 = () => {
  // $ Ejercicio
  alert(`Lista de array con objetos:
  const arrayObjetos = [
    { nombre: "Objeto 1", edad: 20 },
    { nombre: "Objeto 2", ciudad: "Barcelona" },
    { nombre: "Objeto 3", edad: 30 },
    { nombre: "Objeto 4", profesion: "Programador" },
  ];
  `);
  let answer = prompt("Escribe la llave del objeto que deseas buscar");
  const resultado = filterArray(arrayObjetos, answer);
  alert("Revisa la consola");
  console.log(resultado);
};

// *14 Crea una función que tome un array de números como argumento y devuelva true si todos los números son pares o false si alguno es impar

const ejercicio_14 = () => {
  // $ Variables
  let array = [];
  let answer = parseInt(prompt("De cuantos datos quieres que sea tu cadena"));
  // $ Validacion
  if (answer == 0) {
    alert("Escribe un numero mayor a 0");
    return;
  }
  if (answer < 0) {
    alert("Escribe un numero Positivo");
    return;
  }
  // $ Ejercicio
  for (let i = 0; i < answer; i++) {
    let dato = parseInt(prompt("Escribe un dato numerico"));
    array.push(dato);
  }
  let control = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      control = false;
      break;
    }
  }
  if (control == true) {
    alert(control);
  } else {
    alert(control);
  }
};
