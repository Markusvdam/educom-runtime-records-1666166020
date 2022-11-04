import React from 'react'
import Footer from './Footer'

const FooterMeta = {
    title: "organisms/Footer",
    component: Footer,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Footer-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Footer {...args} />

export const DefaultFooter = Template.bind({})
DefaultFooter.args = {
    testID: testID
}

export default FooterMeta