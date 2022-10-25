import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductImage from './../../atoms/ProductImage';
import Label from './../../atoms/Label';
import Delete from './../../atoms/Delete';

const ShoppingCartRow = ({ testID, productInfo}) => {

    const utils = ["ShoppingCartRow"].join(" ")

    return(
        <div className={ utils }>
        <div data-testid={ testID } className="ShoppingCartRow1">
            <div><ProductImage imageURL={productInfo.imageURL}/></div>
            <div>
                <h2>{productInfo.title}</h2>
                <p>{productInfo.artist}</p>
            </div>
            <div><Label exceptionType='price' text={productInfo.price}/></div>
            <div><Delete /></div>
        </div>
        <div><hr className="hrCart"></hr></div>
        </div>
    )
}

const info = [
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50"},
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Another Shape of Psychedelic Mu…", artist: "Mythic Sunship", price: "29.50"}
]

ShoppingCartRow.propTypes = {
    testID: PropTypes.string,
    imageURL: PropTypes.oneOf(info)

}

export default ShoppingCartRow