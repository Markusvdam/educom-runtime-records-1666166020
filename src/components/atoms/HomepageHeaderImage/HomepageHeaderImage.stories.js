import React from 'react'
import HomepageHeaderImage from './HomepageHeaderImage'

const HomepageHeaderImageMeta = {
    title: "atoms/HomepageHeaderImage",
    component: HomepageHeaderImage,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "HomepageHeaderImage-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <HomepageHeaderImage {...args} />

export const DefaultHomepageHeaderImage = Template.bind({})
DefaultHomepageHeaderImage.args = {
    testID: testID
}

export default HomepageHeaderImageMeta