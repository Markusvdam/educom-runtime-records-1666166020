import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHomepageHeaderImage } from './HomepageHeaderImage.stories'

const testID = "HomepageHeaderImage-" + Math.floor(Math.random()*90000) + 10000

describe("HomepageHeaderImage", () => {

    it("Can render HomepageHeaderImage", () => {
        render(<DefaultHomepageHeaderImage testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})