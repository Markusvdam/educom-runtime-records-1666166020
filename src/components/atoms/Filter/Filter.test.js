import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultFilter } from './Filter.stories'

const testID = "Filter-" + Math.floor(Math.random()*90000) + 10000

describe("Filter", () => {

    it("Can render Filter", () => {
        render(<DefaultFilter testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})