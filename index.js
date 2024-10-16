let Edades = 0;
let Personas = 0;

function añadirEdad () {
    let continuar = true;

    while (continuar) {
        let edad = prompt("Ingrese su edad, o escriba SALIR para terminar");

        if (edad === "SALIR") {
            continuar = false;
            break;
        }
        edad = parseInt(edad);

        if (!isNaN(edad) && edad > 0) {
            Edades += edad;
            Personas++;
        }
        else {
            alert("Dato invalido. Por favor ingresa una edad nuevamente.");
        }
    }
    if (Personas > 0) {
        let promedio = Edades / Personas;
        alert(`El promedio de las edades de todas las personas ingresadas es de ${Edades} años.`);
    }
    else {
        alert("No se ingresaron edades.");
    }
}
añadirEdad ();


