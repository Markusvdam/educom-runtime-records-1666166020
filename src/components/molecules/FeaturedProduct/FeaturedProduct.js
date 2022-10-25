import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Label from './../../atoms/Label';

const FeaturedProduct = ({ testID, artist, title, text, genre}) => {

    const utils = ["FeaturedProduct"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div><h3>{artist}</h3></div>
            <div><h1>{title}</h1></div>
            <div><p>{text}</p></div>
            <Label exceptionType='genre' text={genre} />

        </div>
    )
}

FeaturedProduct.propTypes = {
    testID: PropTypes.string
}

export default FeaturedProduct