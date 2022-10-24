import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultDiscogs } from './Discogs.stories'

const testID = "Discogs-" + Math.floor(Math.random()*90000) + 10000

describe("Discogs", () => {

    it("Can render Discogs", () => {
        render(<DefaultDiscogs testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})