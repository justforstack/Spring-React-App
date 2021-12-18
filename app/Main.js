import React from "react"
import ReactDOM from "react-dom"
import {BrouserRouter,Switch,Route, BrowserRouter} from 'react-router-dom'

//Component
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"

import About from "./components/About"
import Terms from "./components/Terms"

import WelcomePage from "./components/WelcomePage"
import Test from "./components/Test"
function Main() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
       <Route path="/" exact component={HomeGuest}></Route>
       
      
       <Route path="/about-us">
       <About/>
       </Route>

       <Route path="/terms">
       <Terms/>
       </Route>

       <Route path="/welcome" component={WelcomePage}></Route>
       
       <Route path="/test">
       <Test/>
       </Route>

    </Switch>
    <Footer/>
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
