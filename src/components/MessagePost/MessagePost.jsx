import './MessagePost.css'

const MessagePost = ({ title, author, body }) => {
  return (
    <div className="MessagePostContainer">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{body}</p>
    </div>
  )
}

export default MessagePost
