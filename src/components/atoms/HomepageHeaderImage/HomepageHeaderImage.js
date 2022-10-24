import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const HomepageHeaderImage = ({ testID}) => {

    const utils = ["HomepageHeaderImage"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            
        </div>
    )

}

HomepageHeaderImage.propTypes = {
    testID: PropTypes.string
}

export default HomepageHeaderImage