import { useDatabase } from "./hooks"

//MENU STUFF
import { BrowserRouter, Routes, Route, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import MenuHeader from "./components/organisms/MenuHeader"
import { MenuData } from "./config/MenuData"

import Home from "./components/pages/Home"
import Productpage from "./components/pages/Productpage"
import Cart from "./components/pages/Cart"
import "./resources/styles/main.css"

const App = () => {

  const [data, isLoaded] = useDatabase('records')

  ///TODO TEST CART
  const cartData = ["6SgIQhufXPHipERggGSM", "K2KuUvgVQNq7jnRrsBMv"]

  const AppLayout = () => (
    <>
      <MenuHeader menuData={MenuData}/>
      <Outlet />
    </>
  )

  ///Menudata can be defined in /config/MenuData.js
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home data={data}/>
        },
        {
          path: "/productpage",
          element: <Productpage data={data}/>
        },
        {
          path: "/cart",
          element: <Cart data={data} cartData={cartData}/>
        }
      ]
    }
  ])

  return(
    isLoaded && <RouterProvider router={router} />
  )
}

export default App;