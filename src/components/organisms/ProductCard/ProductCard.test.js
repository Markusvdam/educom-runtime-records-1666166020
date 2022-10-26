import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultProductCard } from './ProductCard.stories'

const testID = "ProductCard-" + Math.floor(Math.random()*90000) + 10000

describe("ProductCard", () => {

    it("Can render ProductCard", () => {
        render(<DefaultProductCard testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})