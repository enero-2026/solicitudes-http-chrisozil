# Solicitudes http
---

## Qué es
El protocolo HTTP nos permite solicitar datos y recursos a un servidor. Estos pueden ser basados en una base de datos o contenido para un sitio web, ejemplo: un video o una base de datos.

## Flujo
Abre conexión
Hace petición
Lee respuesta 
Cierra conexión

## Métodos en una solicitud HTTP
* GET
* POST
* PUT (UPDATE)
* DELETE

**Tú puedes describir en tu solicitud HTTP qué tipo de valor esperas, ejemplo JSON (en bases de datos) o mp4 para el caso de videos.**

En Javascript, podemos implementar consultas a servidor a través de:
- Uso de librerías como jQuery
- APIs de Javascript:
- AJAX / XMLHttpRequest (Es un estándar que tiene soporte de navegadores anteriores y actuales)
- Fetch (esto es lo más nuevo y es basado en promesas, es decir, funciones asíncronas que realizan una operación y tienen un retorno de un valor resultante como completado o fallo)

## Estructura de una Solicitud
Cabecera
Aporta información adicional

Cuerpo
Mensaje. Generalmente este lo utilizamos en el método POST y PUT ya que enviamos información al servidor.

Método
Campo obligatorio. Indica el tipo de solicitud 

Path (Ruta)
La dirección del recurso a consultar

Códigos de respuestas de Solicitudes

| Codigo | Descripción |
| ------------- | ------------- |
| 100 -199 | Informativas |
| 200 - 299 | Exitosas |
| 300 - 399  | Redirecciones |
| 400 - 499 | Errores de clientes (acceso, conexion) |
| 500 - 599 | Errores de servidor ("Internal Server Error", "Service Unavailable", "Timeout") |


## Sintaxis
AJAX (XMLHttPRequest)


<img width="580" height="260" alt="download" src="https://github.com/user-attachments/assets/fadfde64-33d3-4c77-a085-e6064ae17392" />

## Promesas (Fetch)
<img width="587" height="102" alt="download-1" src="https://github.com/user-attachments/assets/bda51dae-179f-4256-92a9-5003ad8b0db3" />


---
## Ejercicios
### Ejercicio OpenWeather
Regístrate en OpenWeather y crea. una llave API
Solicitudes
Haz una solicitud GET para obtener el clima actual de las siguientes ciudades.
Muestra el clima y temperatura de Monterrey
Añade un campo de entrada para que se pueda ingresar una ciudad
Errores
Haz una consulta del clima "Topochico". Esta no es una ciudad exista, entonces el resultado de esta solicitud será de 400
Revisa la sección de errores https://openweathermap.org/api/one-call-3#error400 para implementar un error adicional

### Ejercicio JSONPlaceholder
Utilizaremos la API pública de JSON Placeholder
Solicitudes
En una página 
Cuando la página cargue, tendremos una lista de todos los posts. Este se realiza con una consulta GET que los muestre en una tabla con los siguientes valores:
Titulo
Un botón de eliminar.  Al momento de hacer clic en el botón se realiza una solicitud DELETE para eliminarlo.
Haz una solicitud POST para crear un post, los datos los inserta el usuario a través de campos de texto / textarea.
Haz una solicitud DELETE para eliminar el post creado

**Utiliza ambos métodos**

---

## Referencias
https://kinsta.com/blog/javascript-http-request/?classId=31656c94-23a9-47be-b3ed-a16f5f1273a4&assignmentId=a723ebce-f1e7-4fce-8279-f5cf101a852d&classId=3ee93462-8ac4-4aa7-b01c-af8a6350f0d5&assignmentId=38b1d8d2-d664-4898-be15-0b986d5f2c14&classId=d320c43f-5113-41f9-9d3b-f42883b3ae87&assignmentId=a168c004-275d-4dd9-b77a-b622408e8b52 

https://jsonplaceholder.typicode.com/?classId=31656c94-23a9-47be-b3ed-a16f5f1273a4&assignmentId=a723ebce-f1e7-4fce-8279-f5cf101a852d&classId=3ee93462-8ac4-4aa7-b01c-af8a6350f0d5&assignmentId=38b1d8d2-d664-4898-be15-0b986d5f2c14&classId=d320c43f-5113-41f9-9d3b-f42883b3ae87&assignmentId=a168c004-275d-4dd9-b77a-b622408e8b52 

https://openweathermap.org/?classId=31656c94-23a9-47be-b3ed-a16f5f1273a4&classId=3ee93462-8ac4-4aa7-b01c-af8a6350f0d5&assignmentId=a723ebce-f1e7-4fce-8279-f5cf101a852d&assignmentId=38b1d8d2-d664-4898-be15-0b986d5f2c14&classId=d320c43f-5113-41f9-9d3b-f42883b3ae87&assignmentId=a168c004-275d-4dd9-b77a-b622408e8b52 

https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status?classId=3ee93462-8ac4-4aa7-b01c-af8a6350f0d5&assignmentId=38b1d8d2-d664-4898-be15-0b986d5f2c14&classId=d320c43f-5113-41f9-9d3b-f42883b3ae87&assignmentId=a168c004-275d-4dd9-b77a-b622408e8b52 

