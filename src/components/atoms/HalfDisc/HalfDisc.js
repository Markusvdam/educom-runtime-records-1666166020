import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const HalfDisc = ({ testID}) => {

    const utils = ["HalfDisc"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            
        </div>
    )

}

HalfDisc.propTypes = {
    testID: PropTypes.string
}

export default HalfDisc