import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultFacebook } from './Facebook.stories'

const testID = "Facebook-" + Math.floor(Math.random()*90000) + 10000

describe("Facebook", () => {

    it("Can render Facebook", () => {
        render(<DefaultFacebook testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})