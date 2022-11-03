import "./resources/styles/main.css"
import { useDatabase } from "./hooks"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/pages/Menu"
import Home from "./components/pages/Home"
import Productpage from "./components/pages/Productpage"
import Cart from "./components/pages/Cart"

const App = () => {

  const [data, isLoaded] = useDatabase('records')

  ///TODO TEST CART
  const cartData = ["6SgIQhufXPHipERggGSM", "K2KuUvgVQNq7jnRrsBMv"]

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          {isLoaded && <Route index element={<Home data={data}/>} />}

          {/* TODO PRODUCTPAGE DATAFLOW CLICKED ITEM ETC*/}
          {isLoaded && <Route path="productpage" element={<Productpage data={data}/>} />}

          {/* TODO CART DATAFLOW WITH CART-INFO ETC - CURRENT = COPYPAST-PRODUCTPAGE*/}
          {isLoaded && <Route path="cart" element={<Cart data={data} cartData={cartData}/>} />}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;