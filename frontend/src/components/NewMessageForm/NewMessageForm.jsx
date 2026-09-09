import './NewMessageForm.css'

const NewMessageForm = ({ newMessageTitle, setNewMessageTitle,
  newMessageAuthor, setNewMessageAuthor, newMessageText,
  setNewMessageText, handleNewMessage }) => {

  const handleTitleChange = (event) => {
    setNewMessageTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewMessageAuthor(event.target.value)
  }

  const handleTextChange = (event) => {
    setNewMessageText(event.target.value)
  }

  return (
      <form id="NewMessageForm" onSubmit={event => handleNewMessage(event)}>
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
