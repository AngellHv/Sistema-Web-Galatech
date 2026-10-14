# GALATECH

GALATECH es una propuesta de sistema web para llevar el control de los equipos que ingresan a reparación y que los clientes puedan consultar su avance con un código. El frontend se desarrolló tomando como referencia los wireframes del informe del proyecto.

## Recorrido de la aplicación

La pantalla de inicio es para el cliente. Al ingresar un código puede ver el estado de la reparación y las fechas de sus cambios. Por ejemplo, `RT-000124` corresponde a una Lenovo IdeaPad 3 con un problema de batería; los códigos `RT-000123`, `RT-000122` y `RT-000121` muestran otros casos.

El técnico entra desde **Iniciar sesión técnico**. Para acceder a este prototipo, usa el usuario `tecnico` y la contraseña `galatech`. En el panel puede buscar una reparación, registrar un equipo recibido o gestionar un servicio existente. También se puede ingresar información distinta en el formulario de registro; el sistema genera un código para la nueva reparación.

Para abrir el proyecto, inicia `index.html` en un navegador.

## Avance actual

Esta entrega contiene las pantallas de consulta, historial, acceso técnico, panel, registro y gestión de reparaciones. Los registros de ejemplo y los nuevos se guardan en el almacenamiento local del navegador, y el inicio de sesión es solo una simulación.

La interfaz está hecha con HTML, CSS y JavaScript. La API REST con Spring Boot y la base de datos PostgreSQL en Supabase, descritas en el informe, corresponden al backend que se desarrollará en la siguiente etapa.
