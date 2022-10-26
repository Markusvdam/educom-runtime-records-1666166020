import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Label from './../../atoms/Label'
import ProductImage from '../../atoms/ProductImage'
import ButtonAdd from '../../atoms/ButtonAdd'


const ProductCard = ({ testID, productInfo}) => {

    const utils = ["ProductCard"].join(" ")
    const textButtonAdd = "Add"

    return(
        <div data-testid={ testID } className={ utils }>
            <Label text={productInfo.price} exceptionType='price'/>
            <div className='ProductCardImage'>
                <img src={ productInfo.imageURL } />
            </div>
            <div className='ProductCardContent'>
                <Label text={productInfo.genre} exceptionType='genre'/>
                <div className='ProductCardTitle'>{productInfo.title}</div>
                <div className='ProductCardBottom'>
                    <div className='ProductCardArtist'>{productInfo.artist}</div>
                    <div className='ProductCardAdd'><ButtonAdd text={textButtonAdd} /></div>
                </div>
            </div>
        </div>
    )

}

const info = [
    {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Another Shape of Psychedelic Mu…", artist: "Mythic Sunship", price: "29.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}
]

ProductCard.propTypes = {
    testID: PropTypes.string,
    productInfo: PropTypes.oneOf(info)
}

export default ProductCard