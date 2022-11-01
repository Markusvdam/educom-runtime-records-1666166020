import "./resources/styles/main.css"
import { useState, useEffect, Children } from 'react'
import { useDatabase } from "./hooks"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import TopHeader from './components/organisms/TopHeader'
import HomepageHeader from './components/organisms/HomepageHeader'
import ProductlistFilter from './components/organisms/ProductlistFilter'
import Footer from './components/organisms/Footer'

import { waitFor } from "@testing-library/react";
import { async } from "@firebase/util";

const App = () => {

  const [data, isLoaded] = useDatabase('records')

  return(
    <Container fluid>
      <TopHeader />

      { isLoaded ? (
        <>
        <HomepageHeader productInfo={data[3].data}/>
        <p>&nbsp;</p><p>&nbsp;</p>
        <ProductlistFilter productData={data} />
        </>
        ) : (
          <h1>Loading...</h1> 
        )
      }

      <Footer />

    </Container>
  )

}
export default App;