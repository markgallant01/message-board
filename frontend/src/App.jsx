import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import MessagePost from './components/MessagePost/MessagePost.jsx'
import NewMessageForm from './components/NewMessageForm/NewMessageForm.jsx'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/messageposts')
    .then((response) => {
      setPosts(response.data)
    })
  }, [])

  const handleNewMessage = (title, author, text) => {
    const newMessage = {
      title: title,
      author: author,
      text: text
    }

    axios
      .post('http://localhost:3001/api/MessagePosts', newMessage)
      .then(response => {
        axios
          .get('http://localhost:3001/api/MessagePosts')
          .then(response => {
            setPosts(response.data)
          })
      })
  }

  return (
    <>
      <div className="NewMessageFormContainer">
        <NewMessageForm handleNewMessage={handleNewMessage} />
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
