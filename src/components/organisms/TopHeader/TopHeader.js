import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Hamburgermenu from './../../atoms/Hamburgermenu'
import Logo from './../../atoms/Logo'

/// TODO: Define props
const TopHeader = ({ testID }) => {

    const utils = ["TopHeader"].join(" ")


    return(
        <div data-testid={ testID } className={ utils }>
            <><Logo /></>
            <><Hamburgermenu /></>
        </div>
    )
}

/*const info = []*/

TopHeader.propTypes = {
    testID: PropTypes.string
}

export default TopHeader