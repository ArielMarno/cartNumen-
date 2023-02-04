import { useReducer, useEffect } from 'react';
import ProductItem from './ProductItem';
import ShoppingCartProduct from './ShoppingCartProduct';
import { reducerCart, productsInitialState } from '../reducers/shoppingCart_reducer';
import TYPES from '../reducers/actionTypes';
import { Navbar } from './Navbar';
import axios from 'axios';
import { Footer } from './Footer';

export const Store = () => {

    const [state, dispatch] = useReducer(reducerCart, productsInitialState);

    const getData = async ()=> {
    
        const productsUrl = "http://localhost:3000/products";
        const cartUrl = "http://localhost:3000/cart";

        const productsList = await axios.get(productsUrl);
        const cart = await axios.get(cartUrl);

        const newProducts = productsList.data;
        const newCart = cart.data;

        dispatch({type: TYPES.READ_STATE, payload: [newProducts, newCart]})
    }


    useEffect(() => {
        getData()
    }, []);

    const addToCart = (id) => {
      dispatch({
        type: TYPES.ADD_TO_CART,
        payload: id
      })
    }
  
    const deleteFromCart = (id) => {
      dispatch({
        type: TYPES.DELETE_PRODUCT_FROM_CART,
        payload: id
      })
    }
  
    const clearCart = () => {
      dispatch({
        type: TYPES.DELETE_ALL_FROM_CART
      })
    }
  
    const calculateTotalPriceOfCart = () => {
      dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART })
    }
  
  
    return (
      <div className='store'>
        <Navbar />
        <div>
        <h2 className='stock'>PRODUCTOS</h2>
        <div className='container-products'>
          {
            state.products.map((product) => {
              return <ProductItem key={product.id} data={product} addToCart={addToCart} />
            })
          }
        </div>
  
        <hr/>
        <div className='cart'>
          <h2 className='shopping-cart'>Carrito🛒</h2>
          <div className='container-buttons'>
          {
            state.cart.length === 0 && <p className='no-products'>Aun no has agregado ningun producto al carrito.</p>
          }
            <button class="btn btn-success" onClick={() => calculateTotalPriceOfCart()}>Total</button>
            {state.totalPriceShoppingCart > 0 && <p className='total-price'>Total a pagar: ${state.totalPriceShoppingCart}</p>}
            <button class="btn btn-warning" onClick={() => clearCart()}>Limpiar carrito</button>
          </div>

          <div className='container-shopping-cart'>
            {
              state.cart.map((productCart) => {
                return <ShoppingCartProduct key={productCart.id + (Math.random() * 50 )} data={productCart} deleteFromCart={deleteFromCart} />
              })
            }
          </div>
          
        </div>
        
        <Footer />
        </div>
      </div>
    )
  }
