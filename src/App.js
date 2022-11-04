import "./resources/styles/main.css"
import { useDatabase } from "./hooks"

//MENU STUFF
import { BrowserRouter, Routes, Route, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import Menu from "./components/organisms/Menu"
import { MenuData } from "./config/MenuData"

import Home from "./components/pages/Home"
import Productpage from "./components/pages/Productpage"
import Cart from "./components/pages/Cart"

const App = () => {

  const [data, isLoaded] = useDatabase('records')

  ///TODO TEST CART
  const cartData = ["6SgIQhufXPHipERggGSM", "K2KuUvgVQNq7jnRrsBMv"]

  const AppLayout = () => (
    <>
      <Menu menuData={MenuData}/>
      <Outlet />
    </>
  )

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