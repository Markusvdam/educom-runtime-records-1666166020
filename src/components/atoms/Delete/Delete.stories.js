import React from 'react'
import Delete from './Delete'

const DeleteMeta = {
    title: "atoms/Delete",
    component: Delete,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Delete-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Delete {...args} />

export const DefaultDelete = Template.bind({})
DefaultDelete.args = {
    testID: testID
}

export default DeleteMeta