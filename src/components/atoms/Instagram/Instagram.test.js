import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultInstagram } from './Instagram.stories'

const testID = "Instagram-" + Math.floor(Math.random()*90000) + 10000

describe("Instagram", () => {

    it("Can render Instagram", () => {
        render(<DefaultInstagram testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})