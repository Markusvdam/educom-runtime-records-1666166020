import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultShoppingCartRow } from './ShoppingCartRow.stories'

const testID = "ShoppingCartRow-" + Math.floor(Math.random()*90000) + 10000

describe("ShoppingCartRow", () => {

    it("Can render ShoppingCartRow", () => {
        render(<DefaultShoppingCartRow testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})