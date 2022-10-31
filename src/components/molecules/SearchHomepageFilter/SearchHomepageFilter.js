import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SearchFieldHome from './../../atoms/SearchFieldHome';
import Filter from './../../atoms/Filter';
import Save from './../../atoms/Save';

const SearchHomepageFilter = ({ testID, onChangeSearch}) => {

    const utils = ["SearchHomepageFilter"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div><SearchFieldHome onChangeSearch={onChangeSearch}/></div>
            <div><Filter /> </div>
            <div><Save /> </div>
        </div>
    )
}

SearchHomepageFilter.propTypes = {
    testID: PropTypes.string
}

export default SearchHomepageFilter