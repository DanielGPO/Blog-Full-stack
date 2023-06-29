import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { UserContext } from '../UserContext'


function PostPage() {
    const {id} = useParams()
    const [postInfo, setPostInfo] = useState(null)
    const {userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                setPostInfo(postInfo)
            })
        })
    }, [])

    if (!postInfo) return '';

  return (
      <div className="post-page">
      <h1>{postInfo.title}</h1>
      {userInfo.id === postInfo.author._id && (
        <div className="editRom">
          <Link className="edit" to={`/edit/${postInfo._id}`}>Editar este post</Link>
        </div>
      )}
          <div className="image">
        <img className="postPage-img" src={`http://localhost:4000/${postInfo.cover}`} alt="" />      
          </div>
      <div className="author">By @{postInfo.author.username}</div>
          <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}
export default PostPage