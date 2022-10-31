import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultPaginationShow } from './PaginationShow.stories'

const testID = "PaginationShow-" + Math.floor(Math.random()*90000) + 10000

describe("PaginationShow", () => {

    it("Can render PaginationShow", () => {
        render(<DefaultPaginationShow testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})