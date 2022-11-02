import Container from 'react-bootstrap/Container';
import TopHeader from './../components/organisms/TopHeader'
import Productlist from './../components/organisms/Productlist'
import Footer from './../components/organisms/Footer'
import ProductpageItem from './../components/organisms/ProductpageItem'

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