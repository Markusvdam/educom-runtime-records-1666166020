import React from 'react'
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';

/// Preferably each story instead of actual object
///
import { DefaultMenuHeader } from './MenuHeader.stories'

const testID = "MenuHeader-" + Math.floor(Math.random()*90000) + 10000
const testMenuData = [
    {
      title : "Shop", 
      path: "/"
    }, 
    {
      title : "Cart", 
      path: "/cart"
    }, 
    {
      title : "Account", 
      path: "/"
    }, 
    {
      title : "Info", 
      path: "/"
    }, 
    {
      title : "Contact", 
      path: "/"
    }
  ]

describe("MenuHeader", () => {

    it("Can render MenuHeader", () => {
        render(<DefaultMenuHeader testID={ testID } menuData={testMenuData}/>, {wrapper: MemoryRouter})
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})