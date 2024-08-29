import { useState, useRef } from 'react'
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom'

import Home from './routes/Home'
import Nav from './components/Nav'
import ExperienceProvider from './components/ExperienceProvider'
import './App.css'
import Footer from './components/Footer'
import BlogPage from './routes/BlogPage'

export default function App() {

  return (
    <>
      <HashRouter>
        <ExperienceProvider>
          <Nav />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog/:blogid' element={<BlogPage />} />
          </Routes>
          <Footer />
        </ExperienceProvider>
      </HashRouter>
    </>
  )
}
