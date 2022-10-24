import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const ArrowRight = ({ testID}) => {

    const utils = ["ArrowRight"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: 45 }}/>
        </div>
    )

}

ArrowRight.propTypes = {
    testID: PropTypes.string
}

export default ArrowRight