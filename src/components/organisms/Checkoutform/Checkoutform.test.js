import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultCheckoutform } from './Checkoutform.stories'

const testID = "Checkoutform-" + Math.floor(Math.random()*90000) + 10000

describe("Checkoutform", () => {

    it("Can render Checkoutform", () => {
        render(<DefaultCheckoutform testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})