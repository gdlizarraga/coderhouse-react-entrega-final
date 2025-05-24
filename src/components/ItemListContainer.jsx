import Alert from "react-bootstrap/Alert";

const ItemListContainer = (props) => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading className="text-danger">{props.saludo}</Alert.Heading>
        <p>
          Haga click{" "}
          <a
            href="https://github.com/gdlizarraga/coderhouse-js-entrega-final/blob/main/README.md"
            target="_blank"
            class="alert-link ch-alert-link"
          >
            aqui
          </a>{" "}
          para que pueda leer el readme.md donde explico que se utilizo para
          esta primer entrega.
        </p>
      </Alert>
      <div>
        <h4 className="mb-3">Primera Pre-Entrega – Detalles y Requisitos</h4>
        <ol>
          <li>
            <strong>Navbar</strong>
            <ul>
              <li>Debe incluir el nombre o logo del e-commerce.</li>
              <li>Contener al menos tres categorías de productos.</li>
              <li>Mostrar dentro de él el componente CartWidget.</li>
            </ul>
          </li>
          <li>
            <strong>CartWidget</strong>
            <ul>
              <li>
                Debe ser un componente que retorne un icono de carrito (puede
                ser una imagen o un ícono de React Icons).
              </li>
              <li>
                Mostrar un número junto al icono, que represente la cantidad de
                ítems en el carrito.
              </li>
              <li>
                Por ahora, el número debe estar harcodeado, pero más adelante
                será dinámico.
              </li>
            </ul>
          </li>
          <li>
            <strong>ItemListContainer</strong>
            <ul>
              <li>Se debe llamar debajo del Navbar en App.js.</li>
              <li>
                Debe recibir una prop desde App.js y renderizarla en pantalla.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="text-center mt-4">
        <img
          src="/estructura_primer_entrega.png"
          alt="Estructura Primer Entrega"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </div>
    </>
  );
};
export default ItemListContainer;
