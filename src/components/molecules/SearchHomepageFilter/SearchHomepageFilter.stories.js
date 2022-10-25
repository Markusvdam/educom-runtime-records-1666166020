import React from 'react'
import SearchHomepageFilter from './SearchHomepageFilter'

const SearchHomepageFilterMeta = {
    title: "molecules/SearchHomepageFilter",
    component: SearchHomepageFilter,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "SearchHomepageFilter-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <SearchHomepageFilter {...args} />

export const DefaultSearchHomepageFilter = Template.bind({})
DefaultSearchHomepageFilter.args = {
    testID: testID
}

export default SearchHomepageFilterMeta