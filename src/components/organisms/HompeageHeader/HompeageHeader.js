import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductImageWithDisc from './../../molecules/ProductImageWithDisc'
import Label from './../../atoms/Label'
import Button from './../../atoms/Button'
import ButtonAdd from './../../atoms/ButtonAdd'

/// TODO: Define props
const HompeageHeader = ({ testID, productInfo}) => {

    const utils = ["HompeageHeader"].join(" ")
    const textButtonRead = "Read more"
    const textButtonAdd = "Add"

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="HompeageHeaderContent">
                <h3>{productInfo.artist}</h3>
                <h1>{productInfo.title}</h1>
                <p>{productInfo.description}</p>
                <Label exceptionType='genre' text={productInfo.genre}/>
                <div className="HompeageHeaderBottom">
                    <div className="left-column"><ButtonAdd text={textButtonAdd}/></div>
                    <div className="right-column"><Button text={textButtonRead}/></div>
                </div>
            </div>
            <div>
                <ProductImageWithDisc imageURL={productInfo.imageURL}/>
            </div>
        </div>
    )

}

const info = [
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Another Shape of Psychedelic Mu…", artist: "Mythic Sunship", price: "29.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}
]

HompeageHeader.propTypes = {
    testID: PropTypes.string,
    productInfo: PropTypes.oneOf(info)
}

export default HompeageHeader