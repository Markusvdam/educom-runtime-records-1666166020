import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultMenu } from './Menu.stories'

const testID = "Menu-" + Math.floor(Math.random()*90000) + 10000

describe("Menu", () => {

    it("Can render Menu", () => {
        render(<DefaultMenu testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})