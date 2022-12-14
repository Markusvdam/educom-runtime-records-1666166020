import Container from 'react-bootstrap/Container'
import TopHeader from './../organisms/TopHeader'
import HomepageHeader from './../organisms/HomepageHeader'
import ProductlistFilter from './../organisms/ProductlistFilter'
import Footer from './../organisms/Footer'

const Home = ({data}) => {

  return(
    <>
      <HomepageHeader productInfo={data[3].data}/>
      <p>&nbsp;</p><p>&nbsp;</p>
      <ProductlistFilter productData={data}/>
     </>
  )

}
export default Home;