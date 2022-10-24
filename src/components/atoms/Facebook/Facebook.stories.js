import React from 'react'
import Facebook from './Facebook'

const FacebookMeta = {
    title: "atoms/Icons/Facebook",
    component: Facebook,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Facebook-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Facebook {...args} />

export const DefaultFacebook = Template.bind({})
DefaultFacebook.args = {
    testID: testID
}

export default FacebookMeta