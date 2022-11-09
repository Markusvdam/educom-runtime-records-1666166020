import Footer from './../organisms/Footer'
import ShoppingCartRow from './../molecules/ShoppingCartRow'

const Cart = ({data, cartData}) => {

  let total = 0;

  return(
    <>
      <center><h2 className='h2'>Shopping cart</h2></center>
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
    </>
  )
}
export default Cart;