import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultSearchFieldHome } from './SearchFieldHome.stories'

const testID = "SearchFieldHome-" + Math.floor(Math.random()*90000) + 10000

describe("SearchFieldHome", () => {

    it("Can render SearchFieldHome", () => {
        render(<DefaultSearchFieldHome testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})