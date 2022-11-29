import React from 'react'
import Checkoutform from './Checkoutform'

const CheckoutformMeta = {
    title: "organisms/Checkoutform",
    component: Checkoutform,
    argTypes: {
        testID: { table: { disable: true } },
        utilityClasses: { name: "Utility Classes" },
        exceptionType: { name: "Exception Type"}
    }
}

const testID = "Checkoutform-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Checkoutform {...args} />

export const DefaultCheckoutform = Template.bind({})
DefaultCheckoutform.args = {
    testID: testID,
    utilityClasses: []
}

export default CheckoutformMeta