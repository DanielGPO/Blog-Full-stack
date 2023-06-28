import {Link} from 'react-router-dom'


function Post({_id, title, summary, cover, content, createdAt, author }) {
  
  // adicionar dependencia que formata a data 
  
    return (
        <main>

    <div className='post'>
          <div className='image'>
            <Link to={`/post/${_id}`}>
        <img src={'http://localhost:4000/'+cover} alt='foto' />
            </Link>
        </div>

          <div className='text'>
          <Link to={`/post/${_id}`}>
              <h2>{title}</h2>
              </Link>
        <p className='info'>
              <a className='author' href='/author'>{author.user}</a>
              <time>{createdAt}</time> 
    
            </p>
              <Link to={`/post/${_id}`}>
              <p className='summary'>{summary}</p>
              </Link>
        </div>
      </div>
        </main>
    )
}

export default Post