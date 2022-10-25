import React from 'react'
import FeaturedProduct from './FeaturedProduct'

const FeaturedProductMeta = {
    title: "molecules/FeaturedProduct",
    component: FeaturedProduct,
    argTypes: {
        testID: { table: { disable: true } },
        artist: {name : "Artist"},
        title: {name : "Song title"},
        text: {name : "Product text"},
        genre: {name : "Genre text"}
    }
}

const testID = "FeaturedProduct-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <FeaturedProduct {...args} />

export const DefaultFeaturedProduct = Template.bind({})
DefaultFeaturedProduct.args = {
    testID: testID,
    artist: "Adult life",
    title: "Book fo Curses",
    text: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury.",
    genre: "post punk, indie, punk"
}

export default FeaturedProductMeta