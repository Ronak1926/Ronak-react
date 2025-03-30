import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'
import Ronak from './ronak.jsx'

/* 
const reactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank',
  },
  children : 'Click me to visit google',
} */


const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target : '_blank'
  },
  'click me to visit google'
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ronak/>
    <h2>pan ahiya mare to a element ma pan kaik return karvu che to su hu kari saku chu k nahi?</h2> 
    
    {reactElement}
  </StrictMode>,
)

//  stict mode hase to te akhu fragment ne j by default return kare che