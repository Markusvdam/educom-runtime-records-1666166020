import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultProductpageItem } from './ProductpageItem.stories'

const testID = "ProductpageItem-" + Math.floor(Math.random()*90000) + 10000

describe("ProductpageItem", () => {

    it("Can render ProductpageItem", () => {
        render(<DefaultProductpageItem testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})