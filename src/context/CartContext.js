import { createContext, useContext, useState } from "react"

export const CartContext = createContext([])

export function useCartContext(){
  return useContext(CartContext)
}

export const CartProvider = ({children}) => {

  const [cartData, setCartData] = useState([])

  const addItem = (id) => {
    if (cartData.find(object => object === id) == null) {
        setCartData(cartData => [...cartData, id])
      }
    else{
        alert("PRODUCT ALREADY EXISTS IN CART")
    }
  }

  return (
    <CartContext.Provider value={{cartData, setCartData, addItem}}>
      {children}
    </CartContext.Provider>
  )
}