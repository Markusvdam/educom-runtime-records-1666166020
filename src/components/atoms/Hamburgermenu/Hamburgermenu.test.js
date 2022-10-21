import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHamburgermenu } from './Hamburgermenu.stories'

const testID = "Hamburgermenu-" + Math.floor(Math.random()*90000) + 10000

describe("Hamburgermenu", () => {

    it("Can render Hamburgermenu", () => {
        render(<DefaultHamburgermenu testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})