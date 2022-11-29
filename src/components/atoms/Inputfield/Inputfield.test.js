import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultInputfield } from './Inputfield.stories'

const testID = "Inputfield-" + Math.floor(Math.random()*90000) + 10000

describe("Inputfield", () => {

    it("Can render Inputfield", () => {
        render(<DefaultInputfield testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})