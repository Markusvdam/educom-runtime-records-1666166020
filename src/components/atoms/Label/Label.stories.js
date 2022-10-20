import React from 'react'
import Label from './Label'

const LabelMeta = {
    title: "atoms/Label",
    component: Label, 
    argTypes: {
        testID: { table: { disable: true } },
        additionalClasses: { name: "Utility Classes" },
        exceptionType: {name : "Exception Types"}
    }   
}

const Template = (args) => <Label {...args} />

const DefaultText = "Default Label"
const DefaultExeptionType = "standard"

export const DefaultLabel = Template.bind({})
DefaultLabel.args = {
    text: DefaultText,
    additionalClasses: [],
    exceptionType: DefaultExeptionType
}

export const LabelGenre = Template.bind({})
LabelGenre.args = {
    text: "indie, math rock, noise rock",
    additionalClasses: [],
    exceptionType: 'genre'
}

export default LabelMeta