import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

const Save = ({ testID}) => {

    const utils = ["Save"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="icon">
            <FontAwesomeIcon icon={faSave} />
            </div>
        </div>
    )

}

Save.propTypes = {
    testID: PropTypes.string
}

export default Save