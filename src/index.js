import React from "react"
import ReactDOM from "react-dom"
import App from "./app.jsx"

if (document.querySelector("#app")) {
  ReactDOM.render(<App />, document.querySelector("#app"))
}
