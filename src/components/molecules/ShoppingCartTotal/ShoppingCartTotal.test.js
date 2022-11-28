import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultShoppingCartTotal } from './ShoppingCartTotal.stories'

const testID = "ShoppingCartTotal-" + Math.floor(Math.random()*90000) + 10000

describe("ShoppingCartTotal", () => {

    it("Can render ShoppingCartTotal", () => {
        render(<DefaultShoppingCartTotal testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})