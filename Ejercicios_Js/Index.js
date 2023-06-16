// # Control
let input_control = document.getElementById("input-control");
let form_control = document.querySelector(".form-control");
let form_variables = document.querySelector(".form-variables");
let form_bucles = document.querySelector(".form-bucles");

form_control.addEventListener("submit", () => {
  if (input_control.value == 1) {
    form_variables.style.display = "flex";
  }
  if (input_control.value == 2) {
    form_bucles.style.display = "flex";
  }
});

// # Taller 1
let input_variables = document.getElementById("input-variables");

form_variables.addEventListener("submit", () => {
  switch (input_variables.value) {
    case "1":
      function variables_caso1() {
        let number_1 = parseInt(prompt("Ecribe un numero"));
        let number_2 = parseInt(prompt("Ecribe otro numero"));
        if (number_1 > number_2) {
          alert(`El numero ${number_1} es mayor a ${number_2}`);
          return;
        }
        if (number_2 > number_1) {
          alert(`El numero ${number_2} es mayor a ${number_1}`);
          return;
        }
        if (number_1 == number_2) {
          alert("Escribe numeros diferentes");
          return;
        }
      }
      variables_caso1();
      break;
    case "2":
      function variables_caso2() {
        let number_1 = parseInt(prompt("Escribe un numero"));
        if (number_1 % 2 == 0) {
          alert(true);
        } else {
          alert(false);
        }
      }
      variables_caso2();
      break;
    case "3":
      function variables_caso3() {
        let number_1 = Number(prompt("Escribe un numero"));
        let respuesta = Math.abs(number_1);
        alert(`El valor absoluto de ${number_1} es ${respuesta}`);
      }
      variables_caso3();
      break;
    case "4":
      function variables_caso4() {
        let cadena = prompt("Escribe una cadena de texto");
        alert(`El numero de caracteres de ${cadena} es ${cadena.length}`);
      }
      variables_caso4();
      break;
    case "5":
      function variables_caso5() {
        let cadena_1 = prompt("Escribe una cadena de texto");
        let cadena_2 = prompt("Escribe otra cadena de texto");
        if (cadena_1.length == cadena_2.length) {
          alert(true);
        } else {
          alert(false);
        }
      }
      variables_caso5();
      break;
    case "6":
      function variables_caso6() {
        let numero_1 = prompt("Escribe un numero");
        if (numero_1 >= 20 && numero_1 <= 50) {
          alert(true);
        } else {
          alert(false);
        }
      }
      variables_caso6();
      break;
    case "7":
      function variables_caso7(name, age) {
        const objeto = {
          name: name,
          age: age,
          saludar() {
            alert(`Hola mi nombre es ${this.name} y tengo ${this.age}`);
          },
        };
        objeto.saludar();
      }
      let name_alert = prompt("Escribe un nombre");
      let age_alert = prompt("Escribe una edad");
      variables_caso7(name_alert, age_alert);
      break;
    case "8":
      function variables_caso8() {
        function sumaArray(array) {
          let suma = 0;
          for (let i = 0; i < array.length; i++) {
            suma += array[i];
          }
          alert(suma);
        }
        let array = [];
        let answer = parseInt(prompt("De cuantos datos quieres que sea tu cadena"));
        if (answer == 0) {
          alert("Escribe un numero mayor a 0");
          return;
        }
        for (let i = 0; i < answer; i++) {
          let dato = parseInt(prompt("Escribe un dato numerico"));
          array.push(dato);
        }
        sumaArray(array);
      }
      variables_caso8();
      break;
    case "9":
      function variables_caso9() {
        function comparacionArray(array) {
          for (let i = 0; i < array.length; i++) {
            if (array[i] < 0) {
              return true;
            } else {
              return false;
            }
          }
        }
        let array = [];
        let answer = parseInt(prompt("De cuantos datos quieres que sea tu cadena"));
        if (answer == 0) {
          alert("Escribe un numero mayor a 0");
          return;
        }
        for (let i = 0; i < answer; i++) {
          let dato = parseInt(prompt("Escribe un dato numerico"));
          array.push(dato);
        }
        let resultado = comparacionArray(array);
        alert(resultado);
      }
      variables_caso9();
      break;
    case "10":
      break;
  }
});
