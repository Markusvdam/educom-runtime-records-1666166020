import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultButtonSubmit } from './ButtonSubmit.stories'

const testID = "ButtonSubmit-" + Math.floor(Math.random()*90000) + 10000

describe("ButtonSubmit", () => {

    it("Can render ButtonSubmit", () => {
        render(<DefaultButtonSubmit testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})