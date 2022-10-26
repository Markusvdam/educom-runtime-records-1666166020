import { useState, useEffect } from 'react'
import PropTypes, { array } from 'prop-types'
import SearchHomepageFilter from './../../molecules/SearchHomepageFilter'
import Productlist from './../Productlist'

const ProductlistFilter = ({ testID, productData}) => {

    const utils = ["ProductlistFilter"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <SearchHomepageFilter />
            <Productlist productData={productData} />
        </div>
    )

}

const data = [
    [
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}
    ],
    [
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}
    ],
]

ProductlistFilter.propTypes = {
    testID: PropTypes.string,
    productData: PropTypes.oneOf(data)
}

export default ProductlistFilter