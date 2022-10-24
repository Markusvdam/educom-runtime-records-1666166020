import React from 'react'
import SearchFieldHome from './SearchFieldHome'

const SearchFieldHomeMeta = {
    title: "atoms/SearchFieldHome",
    component: SearchFieldHome,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "SearchFieldHome-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <SearchFieldHome {...args} />

export const DefaultSearchFieldHome = Template.bind({})
DefaultSearchFieldHome.args = {
    testID: testID
}

export default SearchFieldHomeMeta