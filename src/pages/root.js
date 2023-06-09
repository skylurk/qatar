import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Welcome'
import Question from './Question'
import Spin from './Spin'
import Selection from './Selection'
import Won from './Won'
import QA from './QA'

const RootPage = () => {
  return (
    <div className=' h-screen w-full bg-gray-200'>
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/selection' element={<Selection />} />
            <Route path='/question' element={<Question />} />
            <Route path='/spin' element={<Spin />} />
            <Route path='/won' element={<Won />} />
            <Route path='/qr' element={<QA />} />
        </Routes>
    </div>
  )
}

export default RootPage