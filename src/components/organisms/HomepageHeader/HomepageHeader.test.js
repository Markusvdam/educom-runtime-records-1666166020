import React from 'react'
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';

/// Preferably each story instead of actual object
///
import { DefaultHomepageHeader } from './HomepageHeader.stories'

const testID = "HomepageHeader-" + Math.floor(Math.random()*90000) + 10000
const testProductInfo = {imageURL: "https://i1.sndcdn.com/artworks-000085484153-bl8j1y-t500x500.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "29.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}

describe("HomepageHeader", () => {

    it("Can render HomepageHeader", () => {
        render(<DefaultHomepageHeader testID={ testID } productInfo={testProductInfo} />, {wrapper: MemoryRouter})
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})