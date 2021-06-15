import React from 'react'

import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { configureStore } from './store/configureStore'

import { Dashboard, EditPage } from './pages'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/editpage/:ind" component={EditPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
