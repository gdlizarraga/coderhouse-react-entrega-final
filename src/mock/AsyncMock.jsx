const productos = [
  {
    id: "01",
    name: "Heladera Electrolux Inverter No Frost IF43S 390L​ts",
    description: "Heladera Electrolux Inverter No Frost IF43S 390L​ts",
    stock: 50,
    price: "2.000.000",
    category: "electronica",
    img: "../productos/heladera.jpg",
  },
  {
    id: "02",
    name: "Lavarropas Carga Frontal 6,5Kg 1000 RPM Blanco Siam LSI-LF6510B2",
    description:
      "Lavarropas Carga Frontal 6,5Kg 1000 RPM Blanco Siam LSI-LF6510B2",
    stock: 20,
    price: "529.999",
    category: "electronica",
    img: "../productos/lavaropa.jpg",
  },
  {
    id: "03",
    name: "Aire Acondicionado Sansei Split Inverter Frío/calor 3053 Fgs",
    description:
      "Aire Acondicionado Sansei SAIN35HA3B Split Inverter Frío/calor 3053 Fgs",
    stock: 10,
    price: "699.998",
    category: "electronica",
    img: "../productos/aire.jpg",
  },
  {
    id: "04",
    name: "Cocina Escorial Candor S2 Gas Natural 51 Cm",
    description: "Cocina Escorial Candor S2 Gas Natural 51 Cm",
    stock: 12,
    price: "314.999",
    category: "electronica",
    img: "../productos/cocina.jpg",
  },
  {
    id: "05",
    name: "Colchón de Espuma y Sommier Spring Air 2 Plazas 140x190cm",
    description:
      "Colchón de Espuma y Sommier Spring Air 2 Plazas 140x190cm + Almohadas",
    stock: 25,
    price: "309.999",
    category: "hogar",
    img: "../productos/colchon.jpg",
  },
  {
    id: "06",
    name: "Vaso de Vidrio Cristar Mikonos 460cc x6",
    description: "Vaso de Vidrio Cristar Mikonos 460cc x6",
    stock: 60,
    price: "6.999",
    category: "hogar",
    img: "../productos/vasos.jpg",
  },
  {
    id: "07",
    name: "Silla de Oficina Escritorio Mesh Nay Negro Base Cromada",
    description: "Silla de Oficina Escritorio Mesh Nay Negro Base Cromada",
    stock: 80,
    price: "58.100",
    category: "hogar",
    img: "../productos/silla.jpg",
  },
  {
    id: "08",
    name: "Cortina Blackout Blankery Home Terr Bout Natural 140 x 220 cm",
    description:
      "Cortina Blackout Blankery Home Terr Bout Natural 140 x 220 cm",
    stock: 11,
    price: "35.999",
    category: "hogar",
    img: "../productos/cortinas.jpg",
  },
  {
    id: "09",
    name: "Camiseta de manga corta",
    description:
      "Manfinity EMRG Camiseta de manga corta para hombre con gráfico de letra y ribete de contraste, para salir con amigos",
    stock: 36,
    price: "19.233",
    category: "ropa",
    img: "../productos/camisa.jpg",
  },
  {
    id: "10",
    name: "Camiseta casual de manga corta",
    description:
      "Manfinity Dauomo Camiseta casual de manga corta para hombre con impresión de letras para verano",
    stock: 22,
    price: "21.888",
    category: "ropa",
    img: "../productos/camisa2.jpg",
  },
  {
    id: "11",
    name: "Bolso cruzado con hombro",
    description:
      "Bolso cruzado con hombro en ángulo, bolso cruzado pequeño y cuadrado de unicolor minimalista y casual para hombres, bolso bandolera ligero y versátil de nailon resistente al agua, adecuado para adolescentes, verano, actividades al aire libre, viajes, regalo de graduación, accesorios de ropa de cumpleaños, regalos cristianos (cruz, Jesús, Cristo resucitado)",
    stock: 25,
    price: "35.622",
    category: "ropa",
    img: "../productos/cartera.jpg",
  },
  {
    id: "12",
    name: "Pantalones cortos deportivos",
    description:
      "Pantalones cortos deportivos casuales para hombre con estampado, elásticos, transpirables y de secado rápido",
    stock: 33,
    price: "20.555",
    category: "ropa",
    img: "../productos/pantalon_corto.jpg",
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error");
      } else {
        resolve(productos);
      }
    }, 1000);
  });
};
export const getOneProduct = (id) => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error");
      } else {
        let product = productos.find((prod) => prod.id === id);
        resolve(product);
      }
    }, 1000);
  });
};
