const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

const posts = [
  {
    id: 0,
    title: 'Test Post',
    author: 'anonymous',
    body: 'This is a test post.'
  },
  {
    id: 1,
    title: 'Hmm...',
    author: 'Siegmeyer',
    body: 'Still closed... still closed...'
  }
]

// global IDs
let next_id = 2

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/api/MessagePosts', (req, res) => {
  res.json(posts) 
})

app.post('/api/MessagePosts', (req, res) => {
  const newMessage = {
    id: next_id,
    title: req.body.title,
    author: req.body.author,
    body: req.body.text
  }

  next_id++
  posts.push(newMessage)
  return res.status(201).json(newMessage)
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
