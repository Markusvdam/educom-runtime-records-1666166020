import React from 'react'
import Cart from './Cart'

const CartMeta = {
    title: "atoms/Cart",
    component: Cart,
    argTypes: {
        testID: { table: { disable: true } },
        count: { name: "Count" }
    }
}

const testID = "Cart-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Cart {...args} />

export const DefaultCart = Template.bind({})
DefaultCart.args = {
    testID: testID,
    count: 3
}

export default CartMeta