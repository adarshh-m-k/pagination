import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Parent from './components/new/parent'
import PageNation from './components/pageination/pageNation'
import ChildPage from './components/pagination/childPage'
import TabForm from './components/tabForm/TabForm'
import TrailFrontPage from './components/trailFrontpage/trailFrontPage'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageNation />}></Route>
          <Route path='/parent' element={<Parent />}></Route>
          <Route path='/child' element={<ChildPage />}></Route>
          <Route path='/tabfrom' element={<TabForm />}></Route>
          <Route path='/trailfrontpage' element={<TrailFrontPage/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App