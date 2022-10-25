import React from 'react'
import Productlist from './Productlist'

const ProductlistMeta = {
    title: "molecules/Productlist",
    component: Productlist,
    argTypes: {
        testID: { table: { disable: true } },
        productData: { name: "Data" }
    }
}

const testID = "Productlist-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Productlist {...args} />

export const DefaultProductlist = Template.bind({})
DefaultProductlist.args = {
    testID: testID,
    productData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
}

export default ProductlistMeta