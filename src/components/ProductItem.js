
export default function ProductItem({ data, addToCart }) {

  return (
    <div>
      <div class="card">
      <img src={data.url} class="card-img-top" alt={data.name}></img>
      <div class="card-body">
        <h5 class="card-title">{data.name}</h5>
        <p class="card-text">Precio: ${data.price}</p>
        <button class="btn btn-primary" onClick={() => addToCart(data.id)}>+ Añadir al carrito</button>
      </div>
    </div>
    </div>
    
  )
}