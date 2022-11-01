import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHomepageHeader } from './HomepageHeader.stories'

const testID = "HomepageHeader-" + Math.floor(Math.random()*90000) + 10000

describe("HomepageHeader", () => {

    it("Can render HomepageHeader", () => {
        render(<DefaultHomepageHeader testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})