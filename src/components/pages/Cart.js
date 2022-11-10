import Footer from './../organisms/Footer'
import ShoppingCartRow from './../molecules/ShoppingCartRow'
import CurrencyFormatter from './../../config/CurrencyFormatter'
import { useContext } from 'react'
import { CartContext } from '../../hooks/CartContext'

const Cart = ({data}) => {

  const { cartData } = useContext(CartContext)
  let total = 0;

  return(
    <div>
      <center><h2 className='h2'>Shopping cart</h2></center>
      <p>&nbsp;</p><p>&nbsp;</p>
      {
        cartData.map((productID, i) => {    
          const product = data.find(object => object.id === productID) 

          total = total + Number(product.data.price)

            return (
                <ShoppingCartRow productInfo={product.data}/>
            )
        })
      }
      <p>&nbsp;</p><p>&nbsp;</p>
      <center>
      <div><h2 className='h2'>Total: {CurrencyFormatter(total)}</h2></div>
      </center>
      <p>&nbsp;</p><p>&nbsp;</p>
    </div>
  )
}
export default Cart;