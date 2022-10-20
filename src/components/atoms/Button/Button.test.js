import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultButton } from './Button.stories'

const testID = "Button-" + Math.floor(Math.random()*90000) + 10000

describe("Button", () => {

    it("Can render Button", () => {
        render(<DefaultButton testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})