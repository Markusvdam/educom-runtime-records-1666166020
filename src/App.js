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
      <center>
      <h1> - - - header  - - - </h1>
      <p>&nbsp;</p>
      <h1> - - - banner  - - - </h1>
      <p>&nbsp;</p><p>&nbsp;</p>
      </center>

      
        { isLoaded ? (
          <ProductlistFilter productData={data.filter((val)=>{
            if (searchTerm == ""){
              return val
            }
            else if (
                val.data.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.data.genre.toLowerCase().includes(searchTerm.toLowerCase())
              ){
              return val
            }
          })
          
          } onChangeSearch={onChangeSearch}>
          </ProductlistFilter>
          ) : (
            <h1>Loading...</h1>
          )}

      <p>&nbsp;</p><p>&nbsp;</p>
      <center><h1> - - - footer  - - - </h1></center>

    </Container>
  )

}
export default App;