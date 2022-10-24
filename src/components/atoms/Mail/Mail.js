import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Mail = ({ testID}) => {

    const utils = ["Mail"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 22 }}/>
        </div>
    )

}

Mail.propTypes = {
    testID: PropTypes.string
}

export default Mail