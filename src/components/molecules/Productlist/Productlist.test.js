import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultProductlist } from './Productlist.stories'

const testID = "Productlist-" + Math.floor(Math.random()*90000) + 10000

describe("Productlist", () => {

    it("Can render Productlist", () => {
        render(<DefaultProductlist testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})