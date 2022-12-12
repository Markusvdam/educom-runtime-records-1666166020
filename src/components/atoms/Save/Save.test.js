import React from 'react'
import { render, screen } from "@testing-library/react"
import { useProductList } from "./../../../context/ProductListContext"

/// Preferably each story instead of actual object
///
import { DefaultSave } from './Save.stories'

const testID = "Save-" + Math.floor(Math.random()*90000) + 10000
const testProductData = ['een', 'twee']

describe("Save", () => {

    it("Can render Save", () => {
        render(<DefaultSave testID={ testID } productData = {testProductData}/>)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})