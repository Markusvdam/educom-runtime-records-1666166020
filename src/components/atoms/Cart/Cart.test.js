import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultCart } from './Cart.stories'

const testID = "Cart-" + Math.floor(Math.random()*90000) + 10000

describe("Cart", () => {

    it("Can render Cart", () => {
        render(<DefaultCart testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})