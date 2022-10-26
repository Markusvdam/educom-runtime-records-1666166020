import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultProductlistFilter } from './ProductlistFilter.stories'

const testID = "ProductlistFilter-" + Math.floor(Math.random()*90000) + 10000

describe("ProductlistFilter", () => {

    it("Can render ProductlistFilter", () => {
        render(<DefaultProductlistFilter testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})