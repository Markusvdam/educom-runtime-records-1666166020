import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductImage from './../../atoms/ProductImage';
import Label from './../../atoms/Label';
import Delete from './../../atoms/Delete';

const ShoppingCartRow = ({ testID, productInfo}) => {

    const utils = ["ShoppingCartRow"].join(" ")

    return(
        <div className={ utils }>
        <div data-testid={ testID } className="RowContainer">
            <div className="Row">
                
                <div><img src={productInfo.imageURL}/></div>
                
                <div className="info">
                    <h3 className="h3">{productInfo.title}</h3>
                    <h4 className="h5 fg-base-light-50">{productInfo.artist}</h4>
                </div>
                <Label className="label" exceptionType='price' text={productInfo.price}/>
                <Delete />
            </div>
            <div>
                <hr className="hrCart"></hr>
            </div>
        </div>
        
        </div>
    )
}

const info = [
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50"},
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Another Shape of Psychedelic Mu…", artist: "Mythic Sunship", price: "29.50"}
]

ShoppingCartRow.propTypes = {
    testID: PropTypes.string,
    productInfo: PropTypes.oneOf(info)

}

export default ShoppingCartRow