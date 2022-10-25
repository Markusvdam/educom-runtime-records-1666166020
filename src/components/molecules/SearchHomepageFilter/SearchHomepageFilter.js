import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SearchFieldHome from './../../atoms/SearchFieldHome';
import Filter from './../../atoms/Filter';
import Save from './../../atoms/Save';

const SearchHomepageFilter = ({ testID}) => {

    const utils = ["SearchHomepageFilter"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div><SearchFieldHome /></div>
            <div><Filter /> </div>
            <div><Save /> </div>
        </div>
    )
}

SearchHomepageFilter.propTypes = {
    testID: PropTypes.string
}

export default SearchHomepageFilter