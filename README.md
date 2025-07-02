# Proyecto ReactJS - Coderhouse - Segunda Entrega

## Descripción

Este proyecto es una aplicación de e-commerce desarrollada como parte del curso de ReactJS en Coderhouse. El objetivo principal es aplicar los conceptos aprendidos en clase, tales como componentes, props, hooks, rutas, context, manejo de estado y consumo de datos via firebase, para construir una tienda online funcional y visualmente atractiva.

## Funcionalidades principales

- **Listado de productos:** Visualización de todos los productos disponibles.
- **Filtrado por categoría:** Permite ver productos según su categoría seleccionada.
- **Detalle de producto:** Muestra información detallada de cada producto, incluyendo imagen, descripción, precio y stock.
- **Contador de unidades:** Permite seleccionar la cantidad de productos a agregar al carrito.
- **Notificaciones:** Se utiliza SweetAlert2 para mostrar mensajes de confirmación al agregar productos.
- **Manejo de errores:** Se muestran mensajes claros cuando una categoría o producto no existe.
- **Diseño responsivo:** La aplicación se adapta a diferentes tamaños de pantalla para una mejor experiencia de usuario.
- **Carrito de Compra:** Permite realizar la compra de los productos y generar la Order de Compra en Firebase.

## Version Host

Si desea ver una demo del proyecto online, puede ingresar al siguiente link: [CoderFlexApp]()

## Librerias/Tecnologías utilizadas

- **React Router DOM** (https://reactrouter.com/): utilizado para implementar la navegación por rutas en el app.
- **Bootstrap** (https://react-bootstrap.netlify.app/): utilizada para dar el estilo a la app.
- **SweetAlert2** (https://sweetalert2.github.io/): utilizada para las notificaciones que se usan en todo el app.
- **Firebase** (https://firebase.google.com/): utilizado como base de datos para alojar los productos y las ordenes.
- **ReactJS** (https://react.dev): utilizado para construir interfaces de usuario (UIs) dinámicas.
- **React Icons** (https://reactrouter.com/): utilizada para el uso de iconos dentro del app.
- **React Hook Form** (https://react-hook-form.com/get-started): utilizada basicamente para validar formularios de una app.

## Instalación y ejecución

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/gdlizarraga/coderhouse-react-segunda-entrega.git
   ```
2. Muevase a la carpeta creada con el comando:
   ```sh
   cd coderhouse-react-segunda-entrega
   ```
3. Instalar dependencias:
   ```sh
   npm install
   ```
4. Iniciar la aplicación:
   ```sh
   npm run dev
   ```

## Consideraciones

- Los datos de productos se obtienen de Firebase.
- El diseño y la estructura del código buscan seguir buenas prácticas de desarrollo y facilitar la comprensión del flujo de la aplicación.
- Se implementaron mensajes de error y pantallas de carga para mejorar la experiencia del usuario.

## Autor

- Gustavo Daniel Lizarraga
- Ing. en Sistemas
