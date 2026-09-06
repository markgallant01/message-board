import { useState } from 'react'
import './App.css'

const MessagePost = ({ title, author, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{body}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <MessagePost title={"Test Post"} author={"anonymous"}
        body={"This is a test post."}/>
    </>
  )
}

export default App
