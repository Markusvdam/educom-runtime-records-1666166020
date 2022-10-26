import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultSearchHomepageFilter } from './SearchHomepageFilter.stories'

const testID = "SearchHomepageFilter-" + Math.floor(Math.random()*90000) + 10000

describe("SearchHomepageFilter", () => {

    it("Can render SearchHomepageFilter", () => {
        render(<DefaultSearchHomepageFilter testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})