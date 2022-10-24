import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHalfDisc } from './HalfDisc.stories'

const testID = "HalfDisc-" + Math.floor(Math.random()*90000) + 10000

describe("HalfDisc", () => {

    it("Can render HalfDisc", () => {
        render(<DefaultHalfDisc testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})