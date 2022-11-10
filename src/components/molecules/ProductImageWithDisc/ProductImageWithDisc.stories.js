import React from 'react'
import ProductImageWithDisc from './ProductImageWithDisc'

const ProductImageWithDiscMeta = {
    title: "molecules/ProductImageWithDisc",
    component: ProductImageWithDisc,
    argTypes: {
        testID: { table: { disable: true } },
        imageURL: { name: "Image" }
    }
}

const testID = "ProductImageWithDisc-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ProductImageWithDisc {...args} />

export const DefaultProductImageWithDisc = Template.bind({})
DefaultProductImageWithDisc.args = {
    testID: testID,
    imageURL: "https://i1.sndcdn.com/artworks-000085484153-bl8j1y-t500x500.jpg"
}

export default ProductImageWithDiscMeta