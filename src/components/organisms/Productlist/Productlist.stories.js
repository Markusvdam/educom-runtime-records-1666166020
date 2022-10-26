import React from 'react'
import Productlist from './Productlist'

const ProductlistMeta = {
    title: "organisms/Productlist",
    component: Productlist,
    argTypes: {
        testID: { table: { disable: true } },
        productData: { name: "Data" }
    }
}

const testID = "Productlist-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Productlist {...args} />

export const DefaultProductlist = Template.bind({})
DefaultProductlist.args = {
    testID: testID,
    productData:     [
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
        {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}

    ]
}

export default ProductlistMeta