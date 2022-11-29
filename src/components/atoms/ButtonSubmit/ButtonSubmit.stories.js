import React from 'react'
import ButtonSubmit from './ButtonSubmit'

const ButtonSubmitMeta = {
    title: "atoms/ButtonSubmit",
    component: ButtonSubmit,
    argTypes: {
        testID: { table: { disable: true } },
        utilityClasses: { name: "Utility Classes" },
        exceptionType: { name: "Exception Type"}
    }
}

const testID = "ButtonSubmit-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ButtonSubmit {...args} />

export const DefaultButtonSubmit = Template.bind({})
DefaultButtonSubmit.args = {
    text: "Place order",
    testID: testID,
    utilityClasses: []
}

export default ButtonSubmitMeta