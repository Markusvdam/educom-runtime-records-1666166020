import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultClosemenu } from './Closemenu.stories'

const testID = "Closemenu-" + Math.floor(Math.random()*90000) + 10000

describe("Closemenu", () => {

    it("Can render Closemenu", () => {
        render(<DefaultClosemenu testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})