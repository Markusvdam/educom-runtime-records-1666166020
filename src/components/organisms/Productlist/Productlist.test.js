import React from 'react'
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';

/// Preferably each story instead of actual object
///
import { DefaultProductlist } from './Productlist.stories'

const testID = "Productlist-" + Math.floor(Math.random()*90000) + 10000
const testProductData = [
    {
      "id":"6SgIQhufXPHipERggGSM",
      "data":
      {
        "id": "123456789",
        "genre":"post punk, indie, punk",
        "imageURL": "https://treesdirect.co.uk/app/uploads/2018/03/beech-trees-1-400x400.jpg",
        "artist":"Kombynat Robotron",
        "publishDate":{"seconds":330559200,"nanoseconds":884000000},
        "title":"Dickfehler Studio Treffen Nr. 1",
        "price": "22.50",
        "description": "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury."
        }
    },
    {
      "id":"K2KuUvgVQNq7jnRrsBMv",
        "data":
        {
          "id": "987654321",
          "imageURL": "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
          "publishDate":{"seconds":337557600,"nanoseconds":240000000},
          "title":"Another Shape of Psychedelic Mu…",
          "artist":"Mythic Sunship",
          "genre":"Reggae",
          "price": "22.50",
          "description": "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury."
        }
    }
]

describe("Productlist", () => {

    it("Can render Productlist", () => {
        render(<DefaultProductlist testID={ testID } productData={testProductData} />, {wrapper: MemoryRouter})
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})