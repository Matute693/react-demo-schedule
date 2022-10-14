import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PacientList from './components/PacientList'

const App = () => {
  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form />
        <PacientList />
      </div>
    </div>
  )
}

export default App