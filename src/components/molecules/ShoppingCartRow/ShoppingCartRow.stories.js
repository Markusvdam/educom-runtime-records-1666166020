import React from 'react'
import ShoppingCartRow from './ShoppingCartRow'

const ShoppingCartRowMeta = {
    title: "molecules/ShoppingCartRow",
    component: ShoppingCartRow,
    argTypes: {
        testID: { table: { disable: true } },
        productInfo: { name: "Productinfo" }
    }
}

const testID = "ShoppingCartRow-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ShoppingCartRow {...args} />

export const DefaultShoppingCartRow = Template.bind({})
DefaultShoppingCartRow.args = {
    testID: testID,
    productInfo: {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "29.50"}
}

export default ShoppingCartRowMeta