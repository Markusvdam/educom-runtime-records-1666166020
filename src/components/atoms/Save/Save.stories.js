import React from 'react'
import Save from './Save'
import { ProductListProvider } from "../../../context/ProductListContext"

const SaveMeta = {
    title: "atoms/Save",
    component: Save,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Save-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => 
    <>
        <ProductListProvider>
            <Save {...args} />
        </ProductListProvider>
    </>

export const DefaultSave = Template.bind({})
DefaultSave.args = {
    testID: testID
}

export default SaveMeta