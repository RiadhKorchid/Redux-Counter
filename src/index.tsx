import React from "react"  
import ReactDom from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import store from "./app/store"
import {Provider as StoreProvider} from "react-redux"
const root = ReactDom.createRoot( document.getElementById("root" )as HTMLDivElement)
root.render(
    <StoreProvider store={store}>

    <Router>
        <App/>
    </Router>
    </StoreProvider>
)