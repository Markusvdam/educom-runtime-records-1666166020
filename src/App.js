import "./resources/styles/main.css"
import { useDatabase } from "./hooks"
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import MenuHeader from "./components/organisms/MenuHeader"
import { MenuData } from "./config/MenuData"
import Home from "./components/pages/Home"
import Productpage from "./components/pages/Productpage"
import Cart from "./components/pages/Cart"
import { CartContext } from "./context/CartContext"
import { useState } from "react"

const App = () => {

  const [data, isLoaded] = useDatabase('records')
  const [cartData, setCartData] = useState([])
  
  const AppLayout = () => (
    <CartContext.Provider value={{cartData, setCartData}}>
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