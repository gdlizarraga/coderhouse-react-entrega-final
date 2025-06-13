import "../App.css";
import Alert from "react-bootstrap/Alert";

const Indicaciones = (props) => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading className="text-danger">{props.saludo}</Alert.Heading>
        <p>
          Haga click{" "}
          <a
            href="https://github.com/gdlizarraga/coderhouse-react-segunda-entrega/blob/main/README.md"
            target="_blank"
            className="alert-link ch-alert-link"
          >
            aqui
          </a>{" "}
          para que pueda leer el readme.md donde explico que se utilizo para
          esta segunda entrega.
        </p>
      </Alert>
      <div>
        <h4 className="mb-3">Segunda Pre-Entrega – Detalles y Requisitos</h4>
        <ol>
          <li>
            <strong>Navegación y Asincronía</strong>
            <ul>
              <li>
                La segunda pre-entrega debe incluir la navegación básica de la
                app y el manejo de asincronía.
              </li>

              <li>
                Se debe aplicar la librería React Router DOM para la navegación
                y configurar BrowserRouter en App con sus respectivas rutas,
                incluidas rutas dinámicas.
              </li>

              <li>Se entrega por enlace de GitHub.</li>

              <li>Componentes y Funcionalidades</li>
            </ul>
          </li>
          <li>
            <strong>Navbar</strong>
            <ul>
              <li>Debe incluir la navegación de la librería.</li>
              <li>
                El logo o marca de la aplicación debe redirigir a la casa.
              </li>
              <li>Las categorías deben llevarse a sus respectivas páginas.</li>
            </ul>
          </li>
          <li>
            <strong>ItemListContainer</strong>
            <ul>
              <li>
                Debes manejar una promesa para obtener el listado de productos.
              </li>
              <li>
                La promesa debe ejecutarse dentro de un useEffect y la respuesta
                guardarse en un estado.
              </li>
              <li>
                Se debe aplicar la lógica de categorías para reutilizar el
                componente, ya sea que la categoría exista o no.
              </li>
              <li>
                Utilice el gancho useParams para aplicar la lógica de filtrado
                de categorías.
              </li>
              <li>Debe pasar el listado a su hijo ItemList.</li>
            </ul>
          </li>
          <li>
            <strong>ItemList</strong>
            <ul>
              <li>
                Recibe la propiedad de ItemListContainer con el listado de
                productos.
              </li>
              <li>
                Debe recorrer el array con .map() y generar un nuevo componente
                Item por cada producto.
              </li>
              <li>
                Cada elemento generado por .map() debe incluir una clave de
                propiedad única para evitar errores de renderizado.
              </li>
            </ul>
          </li>
          <li>
            <strong>Item</strong>
            <ul>
              <li>
                Recibe la propiedad del .map() en ItemList y muestra los datos
                de cada producto en una tarjeta.
              </li>
              <li>
                Debe contener un botón, enlace o ser clicable para navegar al
                detalle del producto, enviando el id en la ruta.
              </li>
            </ul>
          </li>
          <li>
            <strong>ItemDetail</strong>
            <ul>
              <li>
                Recibe la prop de su padre y muestra la información del
                producto.
              </li>
              <li>Debe incluir una función llamada onAdd que:</li>
              <li>Recibe la cantidad seleccionada por el usuario.</li>
              <li>Renderiza la cantidad seleccionada.</li>
              <li>
                Pasa la función y el stock del producto a su hijo ItemCounter.
              </li>
            </ul>
          </li>
          <li>
            <strong>ItemCount (OPCIONAL)</strong>
            <ul>
              <li>
                Es un contador que permite aumentar hasta el stock disponible y
                no ir a valores negativos.
              </li>
              <li>
                Adjunto una imagen con el mapa de componentes para mayor
                claridad.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="text-center mt-4">
        <img
          src="/estructura_segunda_entrega.png"
          alt="Estructura Primer Entrega"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </div>
    </>
  );
};
export default Indicaciones;
