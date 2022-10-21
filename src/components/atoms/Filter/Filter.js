import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const Filter = ({ testID}) => {

    const utils = ["Filter"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="icon">
            <FontAwesomeIcon icon={faFilter} style={{ fontSize: 30 }}/>
            </div>
        </div>
    )

}

Filter.propTypes = {
    testID: PropTypes.string
}

export default Filter