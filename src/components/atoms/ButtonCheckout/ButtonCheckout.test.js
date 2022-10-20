import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultButtonCheckout } from './ButtonCheckout.stories'

const testID = "ButtonCheckout-" + Math.floor(Math.random()*90000) + 10000

describe("ButtonCheckout", () => {

    it("Can render ButtonCheckout", () => {
        render(<DefaultButtonCheckout testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})