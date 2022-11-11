import "./resources/styles/main.css"
import { useDatabase } from "./hooks"
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import MenuHeader from "./components/organisms/MenuHeader"
import { MenuData } from "./config/MenuData"
import Home from "./components/pages/Home"
import Productpage from "./components/pages/Productpage"
import Cart from "./components/pages/Cart"
import { CartContext } from "./context/CartContext"
import { SearchContext } from "./context/SearchContext"
import { useState } from "react"
import Footer from "./components/organisms/Footer"

const App = () => {

  const [data, isLoaded] = useDatabase('records')
  const [cartData, setCartData] = useState([])
  const addItem = (id) => {
    if (cartData.find(object => object === id) == null) {
        setCartData(cartData => [...cartData, id])
      }
    else{
        alert("PRODUCT ALREADY EXISTS IN CART")
    }
  }

  const [searchData, setSearchData] = useState([])

  const AppLayout = () => (
    <CartContext.Provider value={{cartData, setCartData, addItem}}>
      <SearchContext.Provider value={{searchData, setSearchData}}>
        <MenuHeader menuData={MenuData}/>
        <Outlet />
        <Footer />
      </SearchContext.Provider>
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