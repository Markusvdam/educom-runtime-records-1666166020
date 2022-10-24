import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductImage from './../../atoms/ProductImage';
import HalfDisc from './../../atoms/HalfDisc';

const ProductImageWithDisc = ({ testID, imageURL}) => {

    const utils = ["ProductImageWithDisc"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div><ProductImage imageURL={imageURL}/></div>
            <div><HalfDisc /> </div>
        </div>
    )
}

const imageURLS = [
    "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg"
]

ProductImageWithDisc.propTypes = {
    testID: PropTypes.string,
    imageURL: PropTypes.oneOf(imageURLS)
}

export default ProductImageWithDisc