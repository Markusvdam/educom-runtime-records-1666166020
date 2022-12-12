import React from 'react'
import ProductlistFilter from './ProductlistFilter'
import { withRouter } from 'storybook-addon-react-router-v6';
import { ProductListProvider } from "../../../context/ProductListContext"

const ProductlistFilterMeta = {
    title: "organisms/ProductlistFilter",
    component: ProductlistFilter,
    decorators: [withRouter],
    argTypes: {
        testID: { table: { disable: true } },
        productData: { name: "Data" }
    }
}

const testID = "ProductlistFilter-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => 
                            <ProductListProvider>
                                <ProductlistFilter {...args} />
                            </ProductListProvider>

export const DefaultProductlistFilter = Template.bind({})
DefaultProductlistFilter.args = {
    testID: testID,
    productData:     
    [
        {
          "id":"6SgIQhufXPHipERggGSM",
          "data":
          {
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
          "id":"6SgIQhufXPHipERggGSM",
          "data":
          {
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
          "id":"6SgIQhufXPHipERggGSM",
          "data":
          {
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
              "imageURL": "https://i1.sndcdn.com/artworks-000085484153-bl8j1y-t500x500.jpg",
              "publishDate":{"seconds":337557600,"nanoseconds":240000000},
              "title":"Another Shape of Psychedelic Mu…",
              "artist":"Mythic Sunship",
              "genre":"Reggae",
              "price": "22.50",
              "description": "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury."
            }
        },
        {
            "id":"6SgIQhufXPHipERggGSM",
            "data":
            {
              "genre":"post punk, indie, punk",
              "imageURL": "https://i1.sndcdn.com/artworks-000085484153-bl8j1y-t500x500.jpg",
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
                "imageURL": "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
                "publishDate":{"seconds":337557600,"nanoseconds":240000000},
                "title":"Another Shape of Psychedelic Mu…",
                "artist":"Mythic Sunship",
                "genre":"Reggae",
                "price": "22.50",
                "description": "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury."
              }
          },
          {
            "id":"6SgIQhufXPHipERggGSM",
            "data":
            {
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
                "imageURL": "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg",
                "publishDate":{"seconds":337557600,"nanoseconds":240000000},
                "title":"Another Shape of Psychedelic Mu…",
                "artist":"Mythic Sunship",
                "genre":"Reggae",
                "price": "22.50",
                "description": "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury."
              }
          },
          {
            "id":"6SgIQhufXPHipERggGSM",
            "data":
            {
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
}

export default ProductlistFilterMeta