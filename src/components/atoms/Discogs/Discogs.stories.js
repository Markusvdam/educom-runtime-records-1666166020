import React from 'react'
import Discogs from './Discogs'

const DiscogsMeta = {
    title: "atoms/Icons/Discogs",
    component: Discogs,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Discogs-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Discogs {...args} />

export const DefaultDiscogs = Template.bind({})
DefaultDiscogs.args = {
    testID: testID
}

export default DiscogsMeta