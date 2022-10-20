import React from 'react'
import Button from './Button'

const ButtonMeta = {
    title: "atoms/Button",
    component: Button,
    argTypes: {
        testID: { table: { disable: true } },
        utilityClasses: { name: "Utility Classes" },
        exceptionType: { name: "Exception Type"}
    }
}

const testID = "Button-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
    text: "read more",
    testID: testID,
    utilityClasses: []
}

export default ButtonMeta