import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultProductImageWithDisc } from './ProductImageWithDisc.stories'

const testID = "ProductImageWithDisc-" + Math.floor(Math.random()*90000) + 10000

describe("ProductImageWithDisc", () => {

    it("Can render ProductImageWithDisc", () => {
        render(<DefaultProductImageWithDisc testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})