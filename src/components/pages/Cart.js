import ShoppingCartRow from './../molecules/ShoppingCartRow'
import ShoppingCartTotal from './../molecules/ShoppingCartTotal'
import CurrencyFormatter from './../../config/CurrencyFormatter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ButtonCheckout from './../atoms/ButtonCheckout'

const Cart = ({data}) => {

  const { cartData } = useContext(CartContext)
  let total = 0;
  const textButtonCheckout = "Checkout"

  const checkoutStyle = {
    transform: "scale(1)",
    justifyContent: "center",
  }

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
      <div><ShoppingCartTotal price={CurrencyFormatter(total)}/></div>
      <p>&nbsp;</p><p>&nbsp;</p>
      <div style={checkoutStyle}><ButtonCheckout text={textButtonCheckout}/></div>
    </div>
  )
}
export default Cart;