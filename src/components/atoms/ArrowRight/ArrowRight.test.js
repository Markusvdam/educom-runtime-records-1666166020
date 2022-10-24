import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultArrowRight } from './ArrowRight.stories'

const testID = "ArrowRight-" + Math.floor(Math.random()*90000) + 10000

describe("ArrowRight", () => {

    it("Can render ArrowRight", () => {
        render(<DefaultArrowRight testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})