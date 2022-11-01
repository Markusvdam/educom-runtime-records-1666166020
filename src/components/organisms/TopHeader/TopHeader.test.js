import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultTopHeader } from './TopHeader.stories'

const testID = "TopHeader-" + Math.floor(Math.random()*90000) + 10000

describe("TopHeader", () => {

    it("Can render TopHeader", () => {
        render(<DefaultTopHeader testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})