import React from 'react'
import ProductCard from './ProductCard'

const ProductCardMeta = {
    title: "organisms/ProductCard",
    component: ProductCard,
    argTypes: {
        testID: { table: { disable: true } },
        productInfo: { name: "Product info" }
    }
}

const testID = "ProductCard-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ProductCard {...args} />

export const DefaultProductCard = Template.bind({})
DefaultProductCard.args = {
    testID: testID,
    productInfo: {imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "29.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}
}

export default ProductCardMeta