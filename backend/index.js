const express = require('express')
const app = express()
const port = 3001

const posts = [
  {
    title: 'Test Post',
    author: 'anonymous',
    body: 'This is a test post.'
  },
  {
    title: 'Hmm...',
    author: 'Siegmeyer',
    body: 'Still closed... still closed...'
  }
]

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/api/MessagePosts', (req, res) => {
  res.json(posts) 
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
