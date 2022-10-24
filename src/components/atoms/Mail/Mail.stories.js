import React from 'react'
import Mail from './Mail'

const MailMeta = {
    title: "atoms/Mail",
    component: Mail,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Mail-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Mail {...args} />

export const DefaultMail = Template.bind({})
DefaultMail.args = {
    testID: testID
}

export default MailMeta