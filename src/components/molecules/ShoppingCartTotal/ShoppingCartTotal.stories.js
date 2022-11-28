import React from 'react'
import ShoppingCartTotal from './ShoppingCartTotal'

const ShoppingCartTotalMeta = {
    title: "molecules/ShoppingCartTotal",
    component: ShoppingCartTotal,
    argTypes: {
        testID: { table: { disable: true } },
        price: { name: "Price" }
    }
}

const testID = "ShoppingCartTotal-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ShoppingCartTotal {...args} />

export const DefaultShoppingCartTotal = Template.bind({})
DefaultShoppingCartTotal.args = {
    testID: testID,
    price: 12
}

export default ShoppingCartTotalMeta