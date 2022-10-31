import "./resources/styles/main.css"
import { useState, useEffect, Children } from 'react'
import { useDatabase } from "./hooks"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Logo from './components/atoms/Logo'
import ProductlistFilter from './components/organisms/ProductlistFilter'
import { waitFor } from "@testing-library/react";
import { async } from "@firebase/util";

const App = () => {

  const [data, isLoaded] = useDatabase('records')
  const [searchTerm, setSearchTerm] = useState("")

  function onChangeSearch(event) {
    setSearchTerm(event.target.value)
  }

  return(
    <Container fluid>
      <>{searchTerm}</>

        { isLoaded ? (
          <ProductlistFilter productData={data.filter((val)=>{
            if (searchTerm == ""){
              return val
            }
            else if (val.data.artist.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          })
          
          
          } onChangeSearch={onChangeSearch}>
          </ProductlistFilter>
          ) : (
            <h1>Loading...</h1>
          )}

    </Container>
  )

}
export default App;