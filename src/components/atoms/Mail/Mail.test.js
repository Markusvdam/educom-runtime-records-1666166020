import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultMail } from './Mail.stories'

const testID = "Mail-" + Math.floor(Math.random()*90000) + 10000

describe("Mail", () => {

    it("Can render Mail", () => {
        render(<DefaultMail testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})