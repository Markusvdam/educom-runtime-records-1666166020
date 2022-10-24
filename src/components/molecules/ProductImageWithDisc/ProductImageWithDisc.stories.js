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
    imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg"
}

export default ProductImageWithDiscMeta