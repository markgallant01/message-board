import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import MessagePost from './components/MessagePost/MessagePost.jsx'
import NewMessageForm from './components/NewMessageForm/NewMessageForm.jsx'

function App() {
  const [posts, setPosts] = useState([])

  // NewMessageForm state
  const [newMessageTitle, setNewMessageTitle] = useState('')
  const [newMessageAuthor, setNewMessageAuthor] = useState('')
  const [newMessageText, setNewMessageText] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/api/messageposts')
    .then((response) => {
      setPosts(response.data)
    })
  }, [])

  const handleNewMessage = (event) => {
    event.preventDefault()

    console.log(`Title: ${newMessageTitle}`)
    console.log(`Author: ${newMessageAuthor}`)
    console.log(`Test: ${newMessageText}`)
    console.log(`Ready to submit...`)
  }

  return (
    <>
      <div className="NewMessageFormContainer">
        <NewMessageForm newMessageTitle={newMessageTitle}
          setNewMessageTitle={setNewMessageTitle}
          newMessageAuthor={newMessageAuthor}
          setNewMessageAuthor={setNewMessageAuthor}
          newMessageText={newMessageText}
          setNewMessageText={setNewMessageText}
          handleNewMessage={handleNewMessage}
        />
      </div>
      <div className="container">
        {posts.map(post => {
          return <MessagePost key={post.id} title={post.title}
            author={post.author} body={post.body} />
        })}
      </div>
    </>
  )
}

export default App
