import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import recordstoreday from './../../../resources/images/record-store-day.png';
import Logo from './../../atoms/Logo'

const Footer = ({ testID }) => {

    const utils = ["Footer", "bg-base", "fg-white"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="FooterInfo">
                <div className="FooterBlock"><Logo size="medium" exceptionType="logo-white"/></div>
                <div className="FooterBlock"><h1>INFO</h1></div>
            </div>
            <div className="FooterLogo">
                <img src={recordstoreday} alt="Record Store Day Logo" />;
            </div>
        </div>
    )
}

/*const info = []*/

Footer.propTypes = {
    testID: PropTypes.string
}

export default Footer