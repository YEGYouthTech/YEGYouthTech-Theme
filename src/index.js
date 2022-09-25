import React from "react"
import ReactDOM from "react-dom"
import App from "./app.jsx"

if (document.querySelector("#root")) {
  ReactDOM.render(<App />, document.querySelector("#root"))
}
