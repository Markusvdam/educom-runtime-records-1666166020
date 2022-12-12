import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultFeaturedProduct } from './FeaturedProduct.stories'

const testID = "FeaturedProduct-" + Math.floor(Math.random()*90000) + 10000
const testText = "Psychedelic Rock"

describe("FeaturedProduct", () => {

    it("Can render FeaturedProduct", () => {
        render(<DefaultFeaturedProduct testID={ testID } text = {testText}/>)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})