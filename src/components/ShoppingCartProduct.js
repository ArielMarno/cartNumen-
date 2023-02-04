

export default function ProductoCarritoCompras({ data, deleteFromCart }) {
  return (
    <div className="producto-carrito">
      <h2>{data.name}</h2>
      <p>Precio: ${data.price}</p>
      <button onClick={() => deleteFromCart(data.id)} class="btn btn-danger">Eliminar</button>
    </div>
  )
}
