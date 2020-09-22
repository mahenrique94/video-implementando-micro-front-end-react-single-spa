import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

const About = React.lazy(() => import('../pages/About'))
const Contact = React.lazy(() => import('../pages/Contact'))
const Home = React.lazy(() => import('../pages/Home'))

const Routes = () => (
  <Suspense fallback={<h1>Carregando...</h1>}>
    <BrowserRouter basename="react-lazy">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export default Routes