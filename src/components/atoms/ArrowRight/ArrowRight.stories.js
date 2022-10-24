import React from 'react'
import ArrowRight from './ArrowRight'

const ArrowRightMeta = {
    title: "atoms/Icons/ArrowRight",
    component: ArrowRight,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "ArrowRight-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ArrowRight {...args} />

export const DefaultArrowRight = Template.bind({})
DefaultArrowRight.args = {
    testID: testID
}

export default ArrowRightMeta