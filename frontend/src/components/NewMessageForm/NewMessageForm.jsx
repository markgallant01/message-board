import './NewMessageForm.css'

const NewMessageForm = () => {
  return (
      <form id="NewMessageForm">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="author" placeholder="author" />
        <textarea name="message" placeholder="message" />
        <input type="submit" value="Post" />
      </form> 
  )
}

export default NewMessageForm
