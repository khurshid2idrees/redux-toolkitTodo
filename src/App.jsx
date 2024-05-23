import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'

function App() {

  return (
    <>
    <AddTodos/>
    <Todos/>
    </>
  )
}

export default App
