import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ButtonAdd = ({ text,
    exceptionType = "",
    additionalClasses, testID}) => {

    const utils = ["ButtonAdd", ...additionalClasses || []].join(" ")
    const exType = exceptionType ?? ""

    return(
        <div data-testid={ testID } data-type={exType} className={ utils }>
            <div className="btx"> 
                <div className="btx-animate">
                    <div className="btx-text">{ text }</div>
                    <div className="btx-icon"/>
                </div>
                <div className="btx-payoff">
                    <div className="icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                </div>
            </div>
        </div>
    )
}

/// TODO: Adjust!
const utilityClasses = [
    "x",
    "y"
]

/// TODO: Adjust
const exceptionClasses = [
    "x",
    "y"
]

    ButtonAdd.propTypes = {
    testID: PropTypes.string,
    exceptionType: PropTypes.oneOf(exceptionClasses),
    utilityClasses: PropTypes.arrayOf(PropTypes.oneOf(utilityClasses)),
}

export default ButtonAdd