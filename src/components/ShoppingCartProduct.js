
export default function ShoppingCartProduct({ data, deleteFromCart }) {
  const {id, name, price, quantity} = data;
  return (
    <div className="product-cart">
      <h2>{name}</h2>
      <p>Precio: ${price} <span className="btn btn-primary">{quantity}</span> = $ {price * quantity}</p>
      <button onClick={() => deleteFromCart(id)} className="btn btn-danger">Eliminar</button>
    </div>
  )
}
