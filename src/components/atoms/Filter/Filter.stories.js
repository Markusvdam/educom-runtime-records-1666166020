import React from 'react'
import Filter from './Filter'

const FilterMeta = {
    title: "atoms/Filter",
    component: Filter,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "Filter-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Filter {...args} />

export const DefaultFilter = Template.bind({})
DefaultFilter.args = {
    testID: testID
}

export default FilterMeta