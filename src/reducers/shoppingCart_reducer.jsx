/*funcion reducer */
import TYPES from "./actionTypes";

export const productsInitialState = {
  products: [
    {
      "id": 1,
      "url":"https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "name": "Camisas",
      "price": 60.00
    },
    {
      "id": 2,
      "url":"https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Corbata",
      "price": 32.90
    },
    {
      "id": 3,
      "url": "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "name": "Mocasines",
      "price": 45.60
    },
    {
      "id": 4,
      "url": "https://images.pexels.com/photos/4452528/pexels-photo-4452528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Billetera",
      "price": 15.90
    },
    {
      "id": 5,
      "url": "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "name": "Reloj",
      "price": 100.00
    },
    {
      "id": 6,
      "url": "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Zapatos",
      "price": 58.00
    }
  ],
  cart: [],
  totalPriceShoppingCart: 0
}

export const reducerCart = (state, action) => {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
          ...state,
          products: action.payload[0],
          cart: action.payload[1]
      }
  }
    case TYPES.ADD_TO_CART: {
      let newProduct = state.products.find((product) => product.id === action.payload)
      return {
        ...state,
        cart: [...state.cart, newProduct]
      };
    }
    case TYPES.DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload)
      }
    }

    case TYPES.DELETE_ALL_FROM_CART: {
      return productsInitialState;
    }

    case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
      return {
        ...state,
        totalPriceShoppingCart: state.cart.reduce((previousValue, product) => previousValue + product.price, 0)
      }
    }
    default:
      return state;
  }

}