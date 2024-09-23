import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//sahi hai
function MyApp()
{
  return(
    <div>
      <h1>hello ji kya haal chal</h1></div>
  )
}
//sahi nhi hai
// const ReactElement={
//   type:'a',                                //21/09/2024
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'click me to visit google'
// }

//sahi hai
// const anotherUser="chai aur codeiii"
const reactElement= React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to google',
  // anotherUser
)

//shai hai
// const anotherElement=(
//   <a href="https://google.com" target='_blank'>visit google</a>
// )

createRoot(document.getElementById('root')).render(
  
    <App />
    // reactElement
 
)
