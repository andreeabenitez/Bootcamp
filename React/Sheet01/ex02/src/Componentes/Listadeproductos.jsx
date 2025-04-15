import Producto from "./producto";

function ListaDeProductos({ productos }) {
  return (
    <section className="productos">
      <h1> Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto key={producto.id} {...producto} />
      ))}
    </section>
  );
}
export default ListaDeProductos;
