import Container from 'react-bootstrap/Container';
import TopHeader from './../components/organisms/TopHeader'
import HomepageHeader from './../components/organisms/HomepageHeader'
import ProductlistFilter from './../components/organisms/ProductlistFilter'
import Footer from './../components/organisms/Footer'

const Home = ({data}) => {

  return(
    <Container fluid>
      
      <TopHeader />
      <h1> - HOME - </h1>
      <HomepageHeader productInfo={data[3].data}/>
      <p>&nbsp;</p><p>&nbsp;</p>
      <ProductlistFilter productData={data} />
      <Footer />

    </Container>
  )

}
export default Home;