import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultShoppingCartCheckout } from './ShoppingCartCheckout.stories'

const testID = "ShoppingCartCheckout-" + Math.floor(Math.random()*90000) + 10000

describe("ShoppingCartCheckout", () => {

    it("Can render ShoppingCartCheckout", () => {
        render(<DefaultShoppingCartCheckout testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})