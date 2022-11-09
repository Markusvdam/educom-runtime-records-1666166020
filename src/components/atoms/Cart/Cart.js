import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ testID, count}) => {

    let counterVisible = "hidden"
    
    if (count > 0){
        counterVisible = "visible"
    }

    const utils = ["Cart"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="icon">
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 28 }}/>
            </div>
            <div className="counter" style={{ visibility: counterVisible }}>
                <p>{count}</p>
            </div>
        </div>
    )
}

const count = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

Cart.propTypes = {
    testID: PropTypes.string,
    count: PropTypes.oneOf(count)
}

export default Cart