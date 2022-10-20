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


export const DefaultLabel = Template.bind({})
DefaultLabel.args = {
    text: 'Default Label',
    additionalClasses: [],
    exceptionType: 'standard'
}

export const LabelGenre = Template.bind({})
LabelGenre.args = {
    text: "indie, math rock, noise rock",
    additionalClasses: [],
    exceptionType: 'genre'
}

export const PricePrice = Template.bind({})
PricePrice.args = {
    text: "22.50",
    additionalClasses: [],
    exceptionType: 'price'
}

export default LabelMeta