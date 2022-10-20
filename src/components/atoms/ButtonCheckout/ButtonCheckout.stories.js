import React from 'react'
import ButtonCheckout from './ButtonCheckout'

const ButtonCheckoutMeta = {
    title: "atoms/Button",
    component: ButtonCheckout,
    argTypes: {
        testID: { table: { disable: true } },
        utilityClasses: { name: "Utility Classes" },
        exceptionType: { name: "Exception Type"}
    }
}

const testID = "ButtonCheckout-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ButtonCheckout {...args} />

export const DefaultButtonCheckout = Template.bind({})
DefaultButtonCheckout.args = {
    text: "checkout",
    testID: testID,
    utilityClasses: []
}

export default ButtonCheckoutMeta