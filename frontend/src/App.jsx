import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import MessagePost from './components/MessagePost/MessagePost.jsx'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/messageposts')
    .then((response) => {
        const data = response.data
        setPosts(data)
    })
  }, [])
  console.log(posts)

  return (
    <div className="container">
      {posts.map(post => {
        return <MessagePost key={post.id} title={post.title}
          author={post.author} body={post.body} />
      })}
    </div>
  )
}

export default App
