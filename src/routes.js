import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app'

const AllRoutes = (
  <BrowserRouter>
    <Route exact path='/' component={App} />
  </BrowserRouter>

)

export default AllRoutes
