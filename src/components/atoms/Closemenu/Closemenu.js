import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Closemenu = ({ color, testID}) => {

    const utils = ["Closemenu", color].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: 50 }}/>
        </div>
    )
}

const color = [
    "black",
    "white"
]

Closemenu.propTypes = {
    testID: PropTypes.string,
    color: PropTypes.oneOf(color)
}

export default Closemenu