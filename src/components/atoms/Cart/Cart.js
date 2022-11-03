import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ testID, count}) => {

    const utils = ["Cart"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="icon">
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 28 }}/>
            </div>
            <div className="counter">
                <p>{count}</p>
            </div>
        </div>
    )
}

const count = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
]

Cart.propTypes = {
    testID: PropTypes.string,
    count: PropTypes.oneOf(count)
}

export default Cart