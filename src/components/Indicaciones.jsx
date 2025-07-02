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
            href="https://github.com/gdlizarraga/coderhouse-react-entrega-final/blob/main/README.md"
            target="_blank"
            className="alert-link ch-alert-link"
          >
            aqui
          </a>{" "}
          para que pueda leer el readme.md donde explico que se utilizo para la
          entrega final.
        </p>
      </Alert>
      <div>
        <h4 className="mb-3">Entrega Final – Detalles y Requisitos</h4>
        <ol>
          <li>
            <strong>Listado y Detalle de productos</strong>
            <ul>
              <li>
                Generación dinámica del listado de productos y acceso a la vista
                en detalle de cada uno (ItemListContainer y ItemDetailContainer)
              </li>
              <li>
                Separación en componentes contenedores y de presentación para
                separar responsabilidad de tareas en los mismos.
                (ItemListContainer - ItemList)
              </li>
              <li>
                Implementación de componente ItemCount que permita seleccionar
                cantidad de unidades a agregar al carrito y realice las
                validaciones necesarias (valor mínimo, límite por stock, etc.)
              </li>
              <li>
                Ocultar el componente ItemCount en ItemDetail luego de agregar
                un producto al carrito.
              </li>
            </ul>
          </li>
          <li>
            <strong>Navegación</strong>
            <ul>
              <li>
                Navegación entre las secciones de catálogo, categorías, detalle,
                carrito y checkout, utilizando React Router y mediante enlaces
                en el componente NavBar.
              </li>
              <li>
                Navegación respetando el modelo Single Page App (sin que se
                generen recargas de la página del navegador)
              </li>
            </ul>
          </li>
          <li>
            <strong>Carrito de Compras</strong>
            <ul>
              <li>
                Almacenamiento del estado de carrito de compras mediante
                Context.
              </li>
              <li>
                Mostrar el contenido del carrito dentro del componente Cart
                (productos, cantidades, subtotales, totales, etc.)
              </li>
              <li>
                Mostrar un icono/imágen del carrito en el componente CartWidget.
                Debe mostrar el total de unidades agregadas al context
              </li>
            </ul>
          </li>
          <li>
            <strong>Firebase</strong>
            <ul>
              <li>Implementación de Firestore como base de datos.</li>
              <li>
                Creación de una colección donde se almacene la información de
                todos los productos del e-commerce, y realizar las consultas
                desde React para mostrarlos en la app.
              </li>
              <li>
                Generación de un documento en Firestore al confirmar una compra,
                registrando los detalles de la misma.
              </li>
            </ul>
          </li>
          <li>
            <strong>Experiencia de usuario</strong>
            <ul>
              <li>
                Utilizar renderizado condicional para mostrar loaders y mensajes
                condicionales, como “producto sin stock”, “carrito vacío”, etc.
              </li>
              <li>
                Como finalización de la experiencia de usuario, brindarle al
                usuario el id (o detalles adicionales) de la orden generada en
                Firestore
              </li>
            </ul>
          </li>
          <li>
            <strong>Buenas prácticas y convenciones</strong>
            <ul>
              <li>
                Respetar las convenciones y consignas del curso para los nombres
                de variables funciones, componentes. eventos, y arquitectura de
                carpetas/archivos.
              </li>
              <li>
                Crear un documento en formato markdown documentando brevemente
                el proyecto
              </li>
            </ul>
          </li>
          <li>
            <strong>Estructura de Componentes recomendada</strong>
            <ul>
              <li>
                App
                <ul>
                  <li>
                    NavBar
                    <ul>
                      <li>CartWidget</li>
                    </ul>
                  </li>
                  <li>
                    ItemListContainer
                    <ul>
                      <li>
                        ItemList
                        <ul>
                          <li>Item</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    ItemDetailContainer
                    <ul>
                      <li>
                        ItemDetail
                        <ul>
                          <li>ItemCount</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cart
                    <ul>
                      <li>CartItem</li>
                      <li>CheckoutForm</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Recomendaciones</strong>
            <ul>
              <li>
                Asegúrate de que tu repositorio no presenta errores y es
                público. Te aconsejamos clonarlo y realizar una instalación de
                cero para testear tu app y detectar posibles errores.
              </li>
              <li>
                Otra forma de detectar fallas es realizar un deploy de tu
                proyecto en servicios gratuitos (ej: Vercel, Netlify).
              </li>
              <li>
                Si utilizaste variables de entorno para ocultar tus credenciales
                de Firebase, envíalas a tu profesor cuando realices la entrega.
              </li>
              <li>
                No es necesario que envíes el enlace a tu panel de Firestore: el
                mismo es visible solo para el usuario administrador (es decir,
                accediendo con tu cuenta de google)
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
};
export default Indicaciones;
