import React from 'react'
import Closemenu from './Closemenu'

const ClosemenuMeta = {
    title: "atoms/Closemenu",
    component: Closemenu,
    argTypes: {
        testID: { table: { disable: true } },
        color: { name: "Color" }
    }
}

const testID = "Closemenu-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Closemenu {...args} />

export const DefaultClosemenu = Template.bind({})
DefaultClosemenu.args = {
    testID: testID,
    color: "black"
}

export default ClosemenuMeta