import React from 'react'
import Instagram from './Instagram'

const InstagramMeta = {
    title: "atoms/Icons/Instagram",
    component: Instagram,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Instagram-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Instagram {...args} />

export const DefaultInstagram = Template.bind({})
DefaultInstagram.args = {
    testID: testID
}

export default InstagramMeta