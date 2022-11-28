import { createContext, useContext, useState } from "react"

export const ProductListContext = createContext()

export function useProductList(){
  return useContext(ProductListContext)
}

export const ProductListProvider = ({children}) => {

  const [listDataX, setListDataX] = useState([])

  return (
    <ProductListContext.Provider value={[listDataX, setListDataX]}>
      {children}
    </ProductListContext.Provider>
  )
}