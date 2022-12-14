import "./resources/styles/main.css"
import { useDatabase } from "./hooks/useDatabase"
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import MenuHeader from "./components/organisms/MenuHeader"
import { MenuData } from "./config/MenuData"
import Home from "./components/pages/Home"
import Productpage from "./components/pages/Productpage"
import Cart from "./components/pages/Cart"
import Checkout from "./components/pages/Checkout"
import { CartProvider } from "./context/CartContext"
import { ProductListProvider } from "./context/ProductListContext"
import Footer from "./components/organisms/Footer"

const App = () => {

  //INITIAL LOAD OF DATABASE
  const [data, isLoaded] = useDatabase('records')

  const AppLayout = () => (
    <CartProvider>
      <ProductListProvider>
        <MenuHeader menuData={MenuData}/>
        <Outlet />
        <Footer />
      </ProductListProvider>
    </CartProvider>
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
        },
        {
          path: "/checkout",
          element: <Checkout data={data} />
        }
      ]
    }
  ])

  return(
    isLoaded && <RouterProvider router={router} />
  )
}

export default App;