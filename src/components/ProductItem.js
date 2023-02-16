
export default function ProductItem({ data, addToCart }) {

  return (
    <div>
      <div className="card">
      <img src={data.url} className="card-img-top" alt={data.name}></img>
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">Precio: ${data.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(data.id)}>+ Añadir al carrito</button>
      </div>
    </div>
    </div>
    
  )
}