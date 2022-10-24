import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultProductImage } from './ProductImage.stories'

const testID = "ProductImage-" + Math.floor(Math.random()*90000) + 10000

describe("ProductImage", () => {

    it("Can render ProductImage", () => {
        render(<DefaultProductImage testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})