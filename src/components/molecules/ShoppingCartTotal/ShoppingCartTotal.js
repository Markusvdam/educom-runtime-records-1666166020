import PropTypes from 'prop-types'
import Label from './../../atoms/Label'

const ShoppingCartTotal = ({ testID, price}) => {

    const utils = ["ShoppingCartTotal"].join(" ")

    return(
        <div className={ utils }>
            <div data-testid={ testID } className="RowContainer">
                <div className="Row">
                    <div className='startrow'>
                            <h3 className="h3">Total order:</h3>
                    </div>
                    <div className='endrow'>
                        <div><Label className="label" exceptionType='price' text={price}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ShoppingCartTotal.propTypes = {
    testID: PropTypes.string
}

export default ShoppingCartTotal