import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Hamburgermenu from './../../atoms/Hamburgermenu'
import Logo from './../../atoms/Logo'
import Cart from './../../atoms/Cart'

const TopHeader = ({ testID }) => {

    const utils = ["TopHeader"].join(" ")


    return(
        <div data-testid={ testID } className={ utils }>
            <div className="left"><Logo /></div>
            <div className="right"><Cart /><Hamburgermenu /></div>
        </div>
    )
}

/*const info = []*/

TopHeader.propTypes = {
    testID: PropTypes.string
}

export default TopHeader