import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import JokePage from './components/joke/JokePage'
import Footer from './components/navigation/Footer'
import NavigationBar from './components/navigation/NavigationBar'
import RandomPage from './components/random/RandomPage'
import SearchPage from './components/search/SearchPage'

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/random">
            <RandomPage />
          </Route>
          <Route path="/joke">
            <JokePage />
          </Route>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Provider>
  </>
)

export default App
