import "./resources/styles/main.css"
import { useDatabase } from "./hooks"
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import MenuHeader from "./components/organisms/MenuHeader"
import { MenuData } from "./config/MenuData"
import Home from "./components/pages/Home"
import Productpage from "./components/pages/Productpage"
import Cart from "./components/pages/Cart"
import { CartContext } from "./hooks/CartContext"
import { useState } from "react"

const App = () => {

  const [data, isLoaded] = useDatabase('records')
  const [cartData, setCartData] = useState([])
  const addItem = (id) => {
    if (cartData.find(object => object === id) == null) {
        setCartData(cartData => [...cartData, id])
        alert("PRODUCT ADDED TO CART")
      }
    else{
        alert("PRODUCT EXISTS ALREADY IN CART")
    }
  }

  const AppLayout = () => (
    <CartContext.Provider value={{cartData, setCartData, addItem}}>
      <MenuHeader menuData={MenuData}/>
      <Outlet />
    </CartContext.Provider>
  )

  ///Menudata can be defined in /config/MenuData.js
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home data={data} />
        },
        {
          path: "/productpage",
          element: <Productpage data={data} />
        },
        {
          path: "/cart",
          element: <Cart data={data} />
        }
      ]
    }
  ])

  return(
    isLoaded && <RouterProvider router={router} />
  )
}

export default App;