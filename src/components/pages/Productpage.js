import Container from 'react-bootstrap/Container'
import React, { useState, useEffect } from 'react';
import Productlist from './../organisms/Productlist'
import Footer from './../organisms/Footer'
import ProductpageItem from './../organisms/ProductpageItem'
import { useSearchParams } from "react-router-dom";

const Productpage = ({data}) => {

  //useSearchParams Hook
  let [searchParams, setSearchParams] = useSearchParams()
  let [ID, setID] = useState(searchParams.get("product"));
  let [productInfo, setProductInfo] = useState(data.find(object => object.id === ID));
  
  useEffect(() => {
    setID(searchParams.get("product"))
    setProductInfo(data.find(object => object.id === ID))
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [searchParams, ID])

  return(
    <>
      {productInfo ?
        <ProductpageItem productInfo={productInfo.data}/>
      :
        <h1> -- Wrong/empty data -- </h1>
      }
      <Productlist productData={data.slice(0, 4)} />
      <Footer />

    </>
  )
}

export default Productpage;