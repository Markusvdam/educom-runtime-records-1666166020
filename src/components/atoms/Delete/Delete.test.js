import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultDelete } from './Delete.stories'

const testID = "Delete-" + Math.floor(Math.random()*90000) + 10000

describe("Delete", () => {

    it("Can render Delete", () => {
        render(<DefaultDelete testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})