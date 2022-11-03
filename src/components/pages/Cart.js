import Container from 'react-bootstrap/Container'
import TopHeader from './../organisms/TopHeader'
import Footer from './../organisms/Footer'
import ShoppingCartRow from './../molecules/ShoppingCartRow'
import Label from '../atoms/Label'

const Cart = ({data, cartData}) => {

  let total = 0;

  return(
    <Container fluid>
      <TopHeader />
      <h2 className='h2'>Shopping cart</h2>

      {
        cartData.map((productID, i) => {    
          const product = data.find(object => object.id === productID) 

          total = total + Number(product.data.price)

            return (
              <>
                <ShoppingCartRow productInfo={product.data}/>
              </>
            ); 
        })
      }
      <center>
      <div><h2 className='h2'>Total: {(Math.round(total * 100) / 100).toFixed(2)}</h2></div>
      </center>
      <Footer />
    </Container>
  )
}
export default Cart;