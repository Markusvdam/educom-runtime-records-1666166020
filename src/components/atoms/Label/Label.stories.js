import React from 'react'
import Label from './Label'

const LabelMeta = {
    title: "atoms/Label",
    component: Label, 
    argTypes: {
        testID: { table: { disable: true } },
        additionalClasses: { name: "Utility Classes" }
    }   
}

const Template = (args) => <Label {...args} />

const DefaultText = "Default Label"

export const DefaultLabel = Template.bind({})
DefaultLabel.args = {
    text: DefaultText,
    additionalClasses: []
}

export default LabelMeta