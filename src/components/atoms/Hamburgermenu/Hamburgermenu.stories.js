import React from 'react'
import Hamburgermenu from './Hamburgermenu'

const HamburgermenuMeta = {
    title: "atoms/Hamburgermenu",
    component: Hamburgermenu,
    argTypes: {
        testID: { table: { disable: true } },
        color: { name: "Color" }
    }
}

const testID = "Hamburgermenu-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Hamburgermenu {...args} />

export const DefaultHamburgermenu = Template.bind({})
DefaultHamburgermenu.args = {
    testID: testID,
    color: "black"
}

export default HamburgermenuMeta