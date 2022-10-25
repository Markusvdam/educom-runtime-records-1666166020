import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHompeageHeader } from './HompeageHeader.stories'

const testID = "HompeageHeader-" + Math.floor(Math.random()*90000) + 10000

describe("HompeageHeader", () => {

    it("Can render HompeageHeader", () => {
        render(<DefaultHompeageHeader testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})