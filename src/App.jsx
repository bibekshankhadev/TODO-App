import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import EditTodo from './pages/EditTodo'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<Todo/>} />
        <Route path='/editTodo' element={<EditTodo/>} />
      </Routes>
    </div>
  )
}

export default App