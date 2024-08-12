/**Práctica de Clase
Ejercicios:
1. Contactos:
Crea un objeto literal que represente a un contacto de tu 
teléfono. Este objeto debe tener las propiedades: nombre, 
apellido, número de teléfono y correo electrónico. Luego, 
muestra toda la información del contacto en un formato legible.
2. Mensajes de texto:
Simula una conversación de mensajes de texto. Crea un arreglo 
que contenga objetos, donde cada objeto represente un 
mensaje (con propiedades como: remitente, destinatario y 
contenido). Utiliza un “iterador” para recorrer el arreglo y 
mostrar cada mensaje en pantalla.
3. Llamadas:
Crea un programa que simule el registro de llamadas. Utiliza un 
arreglo para almacenar objetos que representen cada llamada 
(con propiedades como: número marcado, duración y fecha). 
Luego, utilizando un ciclo y condicionales, muestra un resumen 
de las llamadas, indicando las llamadas de más de 5 minutos.
4. Aplicaciones:
Crea un objeto literal que represente una aplicación de tu 
teléfono. Este objeto debe tener propiedades como: nombre, 
categoría, tamaño y calificación. Puedes utilizar un switch case
para mostrar un mensaje diferente según la categoría de la 
aplicación (por ejemplo, "Juego", "Redes sociales", "Utilidad").
5. Plan de datos:
Simula el consumo de datos de un plan móvil. Crea una variable 
para almacenar el límite de datos y otra para el consumo actual. 
Utiliza por ejemplo un ciclo while para ir incrementando el 
consumo hasta alcanzar o superar el límite. Cuando se supere el 
límite, muestra un mensaje indicando que se ha alcanzado el 
límite de datos.
Aclaraciones:
 Objetos literales: Son una forma de representar datos en JavaScript, agrupando 
propiedades y sus valores entre llaves.
 Arreglos: Son colecciones ordenadas de elementos, en este caso, objetos que 
representan mensajes, llamadas, etc.
 Ciclos for: Permiten repetir una acción un número determinado de veces, ideal 
para recorrer arreglos.
 Condicionales if y switch case: Permiten tomar decisiones en el código, 
ejecutando diferentes bloques de código según se cumplan o no ciertas condiciones.
Opción para mejorar los ejercicios:
 Funciones: Introduce funciones para realizar tareas específicas, como agregar un 
nuevo contacto, calcular la duración total de las llamadas, etc.
 Clases: Utiliza clases para modelar objetos más complejos, como un teléfono con 
múltiples contactos, aplicaciones y configuración.
 Interacción con el usuario: Utiliza el prompt para solicitar datos al usuario y 
mostrar resultados en la consola */

const misAplicaciones = {
    aplicacion1: {
        nombre: 'Accesibilidad',
        categoria: 'configuración',
        tamaño: '63.25 MB',
        calificación: 4
    },
    aplicacion2: {
        nombre: 'Calculadora',
        categoria: 'utilidades',
        tamaño: '5.30 MB',
        calificación: 5
    },
    aplicacion3: {
        nombre: 'Gmail',
        categoria: 'correo',
        tamaño: '551 MB',
        calificación: 4
    },
    aplicacion4: {
        nombre: 'Google Play Store',
        categoria: 'tienda en linea',
        tamaño: '150 MB',
        calificación: 4
    },
    aplicacion5: {
        nombre: 'Prime Video',
        categoria: 'películas y series',
        tamaño: '242 MB',
        calificación: 5
    },
    aplicacion6: {
        nombre: 'Cuidado del dispositivo',
        categoria: 'utilidades',
        tamaño: '63.94 MB',
        calificación: 4
    },
    aplicacion7: {
        nombre: 'Ajustes',
        categoria: 'configuración',
        tamaño: '39.69 MB',
        calificación: 4
    },
    aplicacion8: {
        nombre: 'Star+',
        categoria: 'películas y series',
        tamaño: '63.25 MB',
        calificación: 2
    },
    aplicacion9: {
        nombre: 'TikTok',
        categoria: 'redes sociales',
        tamaño: '1.29 GB',
        calificación: 4
    },
    aplicacion10: {
        nombre: 'Instagram',
        categoria: 'redes sociales',
        tamaño: '90.25 MB',
        calificación: 3
    },
    aplicacion11: {
        nombre: 'Facebook',
        categoria: 'redes sociales',
        tamaño: '200 MB',
        calificación: 3
    },

}

const contacto1 = {
    nombre: 'Juan',
    apellido: 'Gomez',
    numeroDeTeléfono: '11255343467',
    correoElectrónico: 'ejemplo@mail.com'
};
const contacto2 = {
    nombre: 'María',
    apellido: 'Rodríguez',
    numeroDeTeléfono: '11543219876',
    correoElectrónico: 'maria@gmail.com'
};
const contacto3 = {
    nombre: 'Pedro',
    apellido: 'Pérez',
    numeroDeTeléfono: '11345678901',
    correoElectrónico: 'pedro.perez@hotmail.com'
};
const contacto4 = {
    nombre: 'Ana',
    apellido: 'García',
    numeroDeTeléfono: '11987654321',
    correoElectrónico: 'ana.garcia@outlook.com'
};
const contacto5 = {
    nombre: 'Luis',
    apellido: 'Fernández',
    numeroDeTeléfono: '11123456789',
    correoElectrónico: 'luis_fernandez@yahoo.com'
};
const mensajes = [
    {
        remitente: "Alice",
        destinatario: "Carlos",
        contenido: "Hola Carlos, ¿cómo estás?"
    },
    {
        remitente: "Carlos",
        destinatario: "Diana",
        contenido: "Nos vemos en la reunión a las 3"
    },
    {
        remitente: "Carlos",
        destinatario: "Fernando",
        contenido: "¿Has terminado el reporte?"
    },
    {
        remitente: "Gabriela",
        destinatario: "Carlos",
        contenido: "Feliz cumpleaños, Carlos!"
    }

];
const llamadas = [
    {
        numeroMarcado: "+1234567890",
        duracion: 5,
        fecha: "2024-08-10"
    },
    {
        numeroMarcado: "+0987654321",
        duracion: 12,
        fecha: "2024-08-09"
    },
    {
        numeroMarcado: "+1122334455",
        duracion: 2,
        fecha: "2024-08-08"
    },
    {
        numeroMarcado: "+5566778899",
        duracion: 8.10,
        fecha: "2024-08-07"
    },
    {
        numeroMarcado: "+6677889900",
        duracion: 15,
        fecha: "2024-08-06"
    },
    {
        numeroMarcado: "+4455667788",
        duracion: 7.50,
        fecha: "2024-08-05"
    },
    {
        numeroMarcado: "+9988776655",
        duracion: 9.30,
        fecha: "2024-08-04"
    },
    {
        numeroMarcado: "+3344556677",
        duracion: 3.05,
        fecha: "2024-08-03"
    }
];




class Telefono {
    constructor(limiteDeDatos = 20, encendido = true, bateria = 100) {
        this.limiteDeDatos = limiteDeDatos;
        this.encendido = encendido;
        this.bateria = bateria
        this.contactos = [];
        this.mensajesDeTexto = mensajes;
        this.registroLlamadas = llamadas;
        this.aplicaciones = misAplicaciones;
    }
    apagarTelefono = () => {
        this.encendido = false;
        console.log('El teléfono esta apagado');
    }
    encederTelefono = () => {
        this.encendido = true;
        console.log('El teléfono esta encendido');
    }
    agregarContacto = (contacto) => {
        if (this.encendido) {
            this.contactos.push({ id: this.contactos.length + 1, ...contacto });
            console.log('contacto agregado correctamente');
            this.bateria -= 2;
        }
    }
    mostrarTodosLosContactos = () => {
        if (this.encendido) {
            this.contactos.forEach((contacto) => {
                console.log(contacto);
            })
            this.bateria -= 5;
        }

    }
    mostrarContacto = (id) => {
        if (this.encendido) {
            const contactoBuscado = this.contactos.filter((contacto) => contacto.id === id);
            this.bateria -= 2;
            console.table(contactoBuscado);
        }
    }
    mostrarAplicacionesPorCategoria = (categoria) => {
        const appPorCategoria = [];
        if (this.encendido) {
            const valores = Object.values(this.aplicaciones);
            for (const app of valores) {
                if (app.categoria === categoria) {
                    appPorCategoria.push(app);
                }
            }
        }
        appPorCategoria.length === 0 ? console.log('No se encontró ninguna aplicación de la categoria buscada') :
            console.table(appPorCategoria);
    }
    crearSMS = (destinatario, remitente, contenido) => {
        if (this.encendido) {
            this.mensajesDeTexto.push({ destinatario, remitente, contenido });
        }

    }
    mostrarTodosLosSMS = () => {
        if (this.encendido) {
            this.mensajesDeTexto.forEach((sms) => {
                console.table(sms);
            })
        }

    }
    mostrarMensajePorDestinatario = (destinatario) => {
        if (this.encendido) {
            const mensajesFiltrados = this.mensajesDeTexto.filter((sms) => sms.destinatario === destinatario);
            if (mensajesFiltrados.length === 0) {
                return console.log('No se encontraron mensajes del destinatario buscado');
            }
            mensajesFiltrados.forEach((sms) => {
                console.table(sms);
            })
        }
    }
    mandarSMS = (destinatario) => {
        if (this.encendido) {
            console.log(`Se envió correctamente el mensaje a ${destinatario}`);
        }

    }
    realizarLlamada = (numero) => {
        if (this.encendido) {
            console.log(`LLamando al numero ${numero}`);
        }
    }
    mostarTodasLasLlamadas = () => {
        if (this.encendido) {
            this.registroLlamadas.forEach((llamada) => {
                console.table(llamada);
            })
        }
    }
    //
    mostarLlamadasMayoresDe5Minutos = () => {
        if (this.encendido) {
            this.registroLlamadas.forEach((llamada) => {
                if (llamada.duracion > 5) {
                    console.table(llamada);
                }
            })

        }
    }
    usarDatos = () => {
        if (this.encendido) {
            while (this.limiteDeDatos > 0) {
                this.limiteDeDatos -= 1;
                console.log(`Tu limite de datos es: ${this.limiteDeDatos}`);
            }
            this.bateria -= 10;
        }
    }
}
const miCelu = new Telefono();
/* console.log(miCelu.bateria);
console.log(miCelu.limiteDeDatos);
miCelu.usarDatos();
console.log(miCelu.bateria);
console.log(miCelu.limiteDeDatos); */
miCelu.agregarContacto(contacto1);
miCelu.agregarContacto(contacto2);
miCelu.agregarContacto(contacto3);
/* console.log('*****Mostrar Todos Los Contactos*****');
miCelu.mostrarTodosLosContactos();
console.log('*****Mostrar Contacto por ID*****');
miCelu.mostrarContacto(2); */
//miCelu.mostrarAplicacionesPorCategoria('películas y series');
//miCelu.mostrarAplicacionesPorCategoria('reset');
/* miCelu.mostrarTodosLosSMS();
console.log('****************************');
miCelu.mostrarMensajePorDestinatario('Carlos');
miCelu.mostrarMensajePorDestinatario('Omar'); */
miCelu.mostarLlamadasMayoresDe5Minutos()
