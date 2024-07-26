import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-dev-runtime.js"

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement  = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", 
    target: '_blank'
  },
  'Click me to visit Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
  reactElement
  // <App />
)
