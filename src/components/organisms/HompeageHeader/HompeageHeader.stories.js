import React from 'react'
import HompeageHeader from './HompeageHeader'

const HompeageHeaderMeta = {
    title: "organisms/HompeageHeader",
    component: HompeageHeader,
    argTypes: {
        testID: { table: { disable: true } },
        productInfo: { name: "Product info" }
    }
}

const testID = "HompeageHeader-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <HompeageHeader {...args} />

export const DefaultHompeageHeader = Template.bind({})
DefaultHompeageHeader.args = {
    testID: testID,
    productInfo: {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "29.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}
}

export default HompeageHeaderMeta