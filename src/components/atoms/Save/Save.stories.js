import React from 'react'
import Save from './Save'

const SaveMeta = {
    title: "atoms/Save",
    component: Save,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Save-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Save {...args} />

export const DefaultSave = Template.bind({})
DefaultSave.args = {
    testID: testID
}

export default SaveMeta