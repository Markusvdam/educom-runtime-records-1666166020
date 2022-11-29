import React from 'react'
import ShoppingCartCheckout from './ShoppingCartCheckout'

const ShoppingCartCheckoutMeta = {
    title: "molecules/ShoppingCartCheckout",
    component: ShoppingCartCheckout,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "ShoppingCartCheckout-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ShoppingCartCheckout {...args} />

export const DefaultShoppingCartCheckout = Template.bind({})
DefaultShoppingCartCheckout.args = {
    testID: testID
}

export default ShoppingCartCheckoutMeta