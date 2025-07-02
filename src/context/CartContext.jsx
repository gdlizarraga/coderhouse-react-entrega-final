import { createContext, useState } from "react";

//crear nuestro contexto.
export const CartContext = createContext();

// crear el proveedor
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //datos y logica del carrito
  //funciones que modifiquen cart

  //agregar un item al carrito
  const agregarItem = (item, cant) => {
    if (existeEnCart(item.id)) {
      // console.log('esta en el carrito')
      //sumar cantidades
      const carritoActualizado = cart.map((prod) => {
        if (item.id === prod.id) {
          //sumar las cantidades
          return { ...prod, cantidad: prod.cantidad + cant };
        } else {
          //retornar el obj sin modificar
          return prod;
        }
      });
      setCart(carritoActualizado);

      //version corta
      // setCart(
      //    cart.map((prod)=>{
      //     if(item.id === prod.id){
      //         //sumar las cantidades
      //         return {...prod, quantity: prod.quantity + cantidad}
      //     }else{
      //         //retornar el obj sin modificar
      //         return prod
      //     }
      // })
      // )
    } else {
      //agrego el item nuevo
      setCart([...cart, { ...item, cantidad: cant }]);
    }
    // console.log("item:",item,'cantidad:', cantidad)
    // console.log({...item, quantity:cantidad})
  };

  //elimine un item del array
  const eliminarItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  //borrar el carrito completo

  const limpiar = () => {
    setCart([]);
  };

  //existe o no en el carrito, debe retornar un booleano

  const existeEnCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //Funcion para calcular el total de items agregados el cart
  const cantidadTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  //Funcion para calcular el total a pagar
  const totalAPagar = () => {
    const total = cart.reduce((acc, prod) => {
      // Convierte el precio a número (elimina puntos y comas si es necesario)
      const precio = Number(
        prod.price.toString().replace(/\./g, "").replace(/,/g, "")
      );
      return acc + precio * prod.cantidad;
    }, 0);
    return total.toLocaleString("es-AR");
  };

  // const contextValue ={
  //     cart,
  // }
  return (
    <CartContext.Provider
      value={{
        cart,
        agregarItem,
        eliminarItem,
        limpiar,
        cantidadTotal,
        totalAPagar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
