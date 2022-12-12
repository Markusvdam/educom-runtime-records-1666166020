import React from 'react'
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';

/// Preferably each story instead of actual object
///
import { DefaultProductCard } from './ProductCard.stories'

const testID = "ProductCard-" + Math.floor(Math.random()*90000) + 10000
const testProductInfo = {id: "123456789", imageURL: "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "29.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}

describe("ProductCard", () => {

    it("Can render ProductCard", () => {
        render(<DefaultProductCard testID={ testID } productInfo={testProductInfo}/>, {wrapper: MemoryRouter})
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})