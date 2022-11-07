import React from 'react'
import MenuHeader from './MenuHeader'

const MenuHeaderMeta = {
    title: "organisms/MenuHeader",
    component: MenuHeader,
    argTypes: {
        testID: { table: { disable: true } },
        menuData: { name: "Menu data:" }
    }
}

const testID = "MenuHeader-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuHeader {...args} />

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


export const DefaultMenuHeader = Template.bind({})
DefaultMenuHeader.args = {
    testID: testID,
    menuData: menuData
}

export default MenuHeaderMeta