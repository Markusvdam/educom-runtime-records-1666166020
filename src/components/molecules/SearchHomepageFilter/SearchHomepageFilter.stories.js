import React from 'react'
import SearchHomepageFilter from './SearchHomepageFilter'
import { ProductListProvider } from "../../../context/ProductListContext"

const SearchHomepageFilterMeta = {
    title: "molecules/SearchHomepageFilter",
    component: SearchHomepageFilter,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "SearchHomepageFilter-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ProductListProvider>
                            <SearchHomepageFilter {...args} />
                            </ProductListProvider>

export const DefaultSearchHomepageFilter = Template.bind({})
DefaultSearchHomepageFilter.args = {
    testID: testID
}

export default SearchHomepageFilterMeta