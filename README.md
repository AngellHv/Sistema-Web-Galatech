# GALATECH

GALATECH es un sistema web para registrar las reparaciones que recibe un servicio técnico y permitir que los clientes consulten cómo va su equipo con un código de seguimiento. Este proyecto corresponde al frontend del sistema, preparado a partir de los wireframes del informe.

## Para probar la interfaz

Abre `index.html` en el navegador. No hace falta instalar nada.

En la pantalla de consulta puedes probar con `RT-000124`, `RT-000123`, `RT-000122` o `RT-000121`. Desde el resultado también puedes ver el historial de estados.

Para entrar como técnico, selecciona **Iniciar sesión técnico**. En esta versión de demostración, el usuario es `tecnico` y la contraseña es `galatech`. Desde el panel puedes revisar los servicios, registrar una reparación o gestionar una existente.

## Qué incluye esta versión

Las pantallas permiten consultar una reparación, ver su historial y probar las tareas principales del técnico: buscar o registrar un cliente, ingresar un equipo y actualizar el estado, diagnóstico y costo.

Los datos de ejemplo y las reparaciones que registres se guardan en el almacenamiento local del navegador. El inicio de sesión también es solo una simulación. La conexión con la API Spring Boot y la base de datos PostgreSQL de Supabase se realizará en la siguiente etapa del proyecto.

La interfaz está construida con HTML, CSS y JavaScript, y se adapta a pantallas de escritorio y móviles.
