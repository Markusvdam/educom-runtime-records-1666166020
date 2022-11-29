import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import Inputfield from './Inputfield'

const InputfieldMeta = {
    title: "atoms/Inputfield",
    component: Inputfield,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Inputfield-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Inputfield {...args} />

export const DefaultInputfield = Template.bind({})
DefaultInputfield.args = {
    testID: testID
}

export default InputfieldMeta