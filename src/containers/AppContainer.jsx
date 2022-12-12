import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import HomeViewContainer from './views/HomeViewContainer'
import DeliveryViewContainer from "../containers/views/DeliveryViewContainer"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeViewContainer />} />
            <Route path='/add' element={<DeliveryViewContainer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App