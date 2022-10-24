import React from 'react'
import Twitter from './Twitter'

const TwitterMeta = {
    title: "atoms/Icons/Twitter",
    component: Twitter,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Twitter-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Twitter {...args} />

export const DefaultTwitter = Template.bind({})
DefaultTwitter.args = {
    testID: testID
}

export default TwitterMeta