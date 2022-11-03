import Container from 'react-bootstrap/Container'
import TopHeader from './../organisms/TopHeader'
import Productlist from './../organisms/Productlist'
import Footer from './../organisms/Footer'
import ProductpageItem from './../organisms/ProductpageItem'

const Productpage = ({data}) => {

  return(
    <Container fluid>
      <TopHeader />
      <p>&nbsp;</p><p>&nbsp;</p>
      <ProductpageItem productInfo={data[3].data} />
      <p>&nbsp;</p><p>&nbsp;</p>
      <p>&nbsp;</p><p>&nbsp;</p>
      <Productlist productData={data.slice(0, 4)} />
      <Footer />

    </Container>
  )

}
export default Productpage;