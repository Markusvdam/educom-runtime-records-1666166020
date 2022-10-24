import React from 'react'
import HalfDisc from './HalfDisc'

const HalfDiscMeta = {
    title: "atoms/HalfDisc",
    component: HalfDisc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "HalfDisc-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <HalfDisc {...args} />

export const DefaultHalfDisc = Template.bind({})
DefaultHalfDisc.args = {
    testID: testID
}

export default HalfDiscMeta