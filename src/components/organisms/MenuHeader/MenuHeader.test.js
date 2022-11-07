import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultMenuHeader } from './MenuHeader.stories'

const testID = "MenuHeader-" + Math.floor(Math.random()*90000) + 10000

describe("MenuHeader", () => {

    it("Can render MenuHeader", () => {
        render(<DefaultMenuHeader testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})