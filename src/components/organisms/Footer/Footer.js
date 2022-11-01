import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Footer = ({ testID }) => {

    const utils = ["Footer", "bg-base", "fg-white"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="FooterInfo">
                <div className="FooterBlock">SOCIALS</div>
                <div className="FooterBlock">INFO</div>
            </div>
            <div className="FooterLogo">
                LOGO
            </div>
        </div>
    )
}

/*const info = []*/

Footer.propTypes = {
    testID: PropTypes.string
}

export default Footer