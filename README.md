# GALATECH · Frontend

Prototipo responsive del sistema de seguimiento y gestión de reparaciones descrito en el informe del proyecto. Se ejecuta directamente en el navegador y todavía no consume una API ni una base de datos.

La distribución visual sigue los wireframes WF-01 a WF-07: barra superior azul, fondo celeste, formularios y resultados en tarjetas centradas; las pantallas de registro y gestión usan la organización por columnas que muestran las figuras.

## Cómo abrirlo

Abre `index.html` en un navegador moderno. No requiere instalar dependencias ni iniciar un servidor.

## Recorrido de demostración

- **WF-01, consulta del cliente:** abre `index.html` y consulta `RT-000124`, `RT-000123`, `RT-000122` o `RT-000121`.
- **WF-02, resultado:** aparece después de consultar uno de esos códigos.
- **WF-03, historial:** usa **Ver historial** en el resultado y **Volver** para regresar.
- **WF-04, login técnico:** desde la consulta, selecciona **Iniciar sesión técnico**. Credenciales: usuario `tecnico`, contraseña `galatech`.
- **WF-05, panel técnico:** aparece al iniciar sesión; usa la tabla para consultar servicios y el botón de registro para crear uno.
- **WF-06, registrar reparación:** elige buscar un cliente por teléfono/correo o registrar uno nuevo, completa el equipo y registra.
- **WF-07, gestionar reparación:** desde la tabla del panel selecciona **Gestionar**, actualiza estado, diagnóstico o costo y guarda.

El cliente no inicia sesión: su acceso es la consulta por código de seguimiento, como indica el documento.

Las reparaciones de demostración y las creadas desde el formulario se guardan en `localStorage` en el navegador actual. El inicio de sesión es una simulación local, no proporciona autenticación real. Al conectar el backend, estas operaciones deberán reemplazarse por llamadas a la API REST y el acceso técnico deberá protegerse desde el servidor.

## Archivos

- `index.html`: punto de entrada y estructura inicial.
- `styles.css`: identidad visual y estilos responsive.
- `app.js`: navegación, formularios, validación e interacción de demostración.
