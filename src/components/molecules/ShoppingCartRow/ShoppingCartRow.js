import PropTypes from 'prop-types'
import Label from './../../atoms/Label'
import Delete from './../../atoms/Delete'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const ShoppingCartRow = ({ testID, productInfo}) => {

    const utils = ["ShoppingCartRow"].join(" ")
    const {cartData, setCartData} = useContext(CartContext)

    function removeItem() {
        setCartData(cartData => cartData.filter(item => item !== productInfo.id))
    }

    return(
        <div className={ utils }>
            <div data-testid={ testID } className="RowContainer">
                <div className="Row">
                    
                    <div className='startrow'>
                        <div><img src={productInfo.imageURL}/></div>
                        
                        <div className="info">
                            <h3 className="h3">{productInfo.title}</h3>
                            <h4 className="h5 fg-base-light-50">{productInfo.artist}</h4>
                        </div>

                    </div>
                    <div className='endrow'>

                            <div><Label className="label" exceptionType='price' text={productInfo.price}/></div>
                            <div onClick={removeItem}><Delete /></div>

                    </div>
                </div>
                <div>
                    <hr className="hrCart"></hr>
                </div>
            </div>
        </div>
    )
}

ShoppingCartRow.propTypes = {
    testID: PropTypes.string
}

export default ShoppingCartRow