import React from 'react'
import ProductImage from './ProductImage'

const ProductImageMeta = {
    title: "atoms/ProductImage",
    component: ProductImage,
    argTypes: {
        testID: { table: { disable: true } },
        imageURL: { name: "Image" }
    }
}

const testID = "ProductImage-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ProductImage {...args} />

export const DefaultProductImage = Template.bind({})
DefaultProductImage.args = {
    testID: testID,
    imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg"
}

export default ProductImageMeta