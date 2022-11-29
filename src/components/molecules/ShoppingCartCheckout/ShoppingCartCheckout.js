import PropTypes from 'prop-types'
import ButtonCheckout from './../../atoms/ButtonCheckout'
import { Link } from "react-router-dom";

const ShoppingCartCheckout = ({ testID}) => {

    const utils = ["ShoppingCartCheckout"].join(" ")
    const textButtonCheckout = "Checkout"

    return(
        <div className={ utils }>
            <div data-testid={ testID } className="RowContainer">
                <div className="Row">
                    <div className='startrow'>
                            <h3 className="h3"></h3>
                    </div>
                    <div className='endrow'>
                        <div><Link to="../checkout"><ButtonCheckout text={textButtonCheckout}/></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ShoppingCartCheckout.propTypes = {
    testID: PropTypes.string
}

export default ShoppingCartCheckout