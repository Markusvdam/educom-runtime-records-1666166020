import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultButtonAdd } from './ButtonAdd.stories'

const testID = "ButtonAdd-" + Math.floor(Math.random()*90000) + 10000

describe("ButtonAdd", () => {

    it("Can render ButtonAdd", () => {
        render(<DefaultButtonAdd testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})