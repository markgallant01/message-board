import { useState } from 'react'
import './App.css'
import MessagePost from './components/MessagePost/MessagePost.jsx'

function App() {
  return (
    <div className="container">
      <MessagePost title={"Test Post"} author={"anonymous"}
        body={"This is a test post."}/>
    </div>
  )
}

export default App
