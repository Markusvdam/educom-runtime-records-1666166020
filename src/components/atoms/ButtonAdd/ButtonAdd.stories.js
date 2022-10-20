import React from 'react'
import ButtonAdd from './ButtonAdd'

const ButtonAddMeta = {
    title: "atoms/Button",
    component: ButtonAdd,
    argTypes: {
        testID: { table: { disable: true } },
        utilityClasses: { name: "Utility Classes" },
        exceptionType: { name: "Exception Type"}
    }
}

const testID = "ButtonAdd-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ButtonAdd {...args} />

export const DefaultButtonAdd = Template.bind({})
DefaultButtonAdd.args = {
    text: "add",
    testID: testID,
    utilityClasses: []
}

export default ButtonAddMeta