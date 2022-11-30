import { createContext, useContext, useState } from "react"

export const ProductListContext = createContext()

export function useProductList(){
  return useContext(ProductListContext)
}

export const ProductListProvider = ({children}) => {

  const [listData, setListData] = useState([])

  return (
    <ProductListContext.Provider value={[listData, setListData]}>
      {children}
    </ProductListContext.Provider>
  )
}