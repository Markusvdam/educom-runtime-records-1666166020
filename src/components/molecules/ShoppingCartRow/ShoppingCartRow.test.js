import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultShoppingCartRow } from './ShoppingCartRow.stories'

const testID = "ShoppingCartRow-" + Math.floor(Math.random()*90000) + 10000
const testProductInfo = {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "29.50"}

describe("ShoppingCartRow", () => {

    it("Can render ShoppingCartRow", () => {
        render(<DefaultShoppingCartRow testID={ testID } productInfo={testProductInfo}/>)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})