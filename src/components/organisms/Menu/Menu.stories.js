import React from 'react'
import Menu from './Menu'

const MenuMeta = {
    title: "organisms/Menu",
    component: Menu,
    argTypes: {
        testID: { table: { disable: true } },
        menuData: { name: "Menu data:" }
    }
}

const testID = "Menu-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Menu {...args} />

const menuData = [
    {
      title : "Shop", 
      path: "/"
    }, 
    {
      title : "Productpage", 
      path: "/productpage"
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


export const DefaultMenu = Template.bind({})
DefaultMenu.args = {
    testID: testID,
    menuData: menuData
}

export default MenuMeta