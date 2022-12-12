import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultProductpageItem } from './ProductpageItem.stories'

const testID = "ProductpageItem-" + Math.floor(Math.random()*90000) + 10000
const testProductInfo = {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "29.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}

describe("ProductpageItem", () => {

    it("Can render ProductpageItem", () => {
        render(<DefaultProductpageItem testID={ testID } productInfo = {testProductInfo} />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})