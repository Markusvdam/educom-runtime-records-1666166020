import React from 'react'
import Logo from './Logo'

const LogoMeta = {
    title: "Atoms/Logo",
    component: Logo, 
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size"},
        exceptionType: { name: "Exception Type"}
    }   
}

const testID = "" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Logo {...args} />

export const DefaultLogo = Template.bind({})
DefaultLogo.args = Logo.defaultProps

export const SmallLogo = Template.bind({})
SmallLogo.args = {
    size: 'small',
    exceptionType: 'logo-black'
}

export const MediumLogo = Template.bind({})
MediumLogo.args = {
    size: 'medium',
    exceptionType: 'logo-black'
}

export const LargeLogo = Template.bind({})
LargeLogo.args = {
    size: 'large',
    exceptionType: 'logo-black'
}

export default LogoMeta