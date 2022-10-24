import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultTwitter } from './Twitter.stories'

const testID = "Twitter-" + Math.floor(Math.random()*90000) + 10000

describe("Twitter", () => {

    it("Can render Twitter", () => {
        render(<DefaultTwitter testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})