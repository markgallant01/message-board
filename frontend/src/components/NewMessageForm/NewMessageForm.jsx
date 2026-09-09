import './NewMessageForm.css'
import { useState } from 'react'

const NewMessageForm = ({ handleNewMessage }) => {
  const [newMessageTitle, setNewMessageTitle] = useState('')
  const [newMessageAuthor, setNewMessageAuthor] = useState('')
  const [newMessageText, setNewMessageText] = useState('')

  const handleTitleChange = (event) => {
    setNewMessageTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewMessageAuthor(event.target.value)
  }

  const handleTextChange = (event) => {
    setNewMessageText(event.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault()
    handleNewMessage(newMessageTitle, newMessageAuthor, newMessageText)
  }

  return (
      <form id="NewMessageForm" onSubmit={event => formSubmit(event)}>
        <input type="text" name="title" placeholder="title"
          value={newMessageTitle}
          onChange={event => handleTitleChange(event)}
        />

        <input type="text" name="author" placeholder="author"
          value={newMessageAuthor}
          onChange={event => handleAuthorChange(event)}
        />

        <textarea name="message" placeholder="message" 
          value={newMessageText}
          onChange={event => handleTextChange(event)}
        />

        <input type="submit" value="Post" />
      </form> 
  )
}

export default NewMessageForm
