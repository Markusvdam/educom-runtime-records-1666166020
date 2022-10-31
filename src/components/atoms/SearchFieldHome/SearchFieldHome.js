import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const SearchFieldHome = ({ testID, onChangeSearch}) => {

    const utils = ["SearchFieldHome"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <input type="text" placeholder="Search" onChange={onChangeSearch}></input>
        </div>
    )

}

    SearchFieldHome.propTypes = {
    testID: PropTypes.string
}

export default SearchFieldHome