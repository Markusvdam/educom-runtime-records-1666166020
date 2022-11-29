import ShoppingCartRow from './../molecules/ShoppingCartRow'
import ShoppingCartTotal from './../molecules/ShoppingCartTotal'
import CurrencyFormatter from './../../config/CurrencyFormatter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ShoppingCartCheckout from './../molecules/ShoppingCartCheckout'


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
      <div><ShoppingCartTotal price={CurrencyFormatter(total)}/></div>
      <div><ShoppingCartCheckout price={CurrencyFormatter(total)}/></div>
      <p>&nbsp;</p><p>&nbsp;</p>

    </div>
  )
}
export default Cart;