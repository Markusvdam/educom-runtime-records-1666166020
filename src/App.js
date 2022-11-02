import "./resources/styles/main.css"
import { useDatabase } from "./hooks"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./views/Menu"
import Home from "./views/Home"
import Productpage from "./views/Productpage"

const App = () => {

  const [data, isLoaded] = useDatabase('records')

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          {isLoaded && <Route index element={<Home data={data}/>} />}
          {isLoaded && <Route path="productpage" element={<Productpage data={data}/>} />}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;