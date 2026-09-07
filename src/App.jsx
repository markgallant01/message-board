import { useState } from 'react'
import './App.css'
import MessagePost from './components/MessagePost/MessagePost.jsx'

function App() {
  return (
    <>
      <MessagePost title={"Test Post"} author={"anonymous"}
        body={"This is a test post."}/>
    </>
  )
}

export default App
