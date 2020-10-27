const React = require('react');

const PostCard = ({ post, user }) => {
  return (
    <div className='card mt-5 mr-5 p-2' style={{ width: '18rem' }}>
      <div className='card-body'>
        <h5 className='card-title font-weight-bolder text-dark'>
          {post.title}
        </h5>
        <h6 className='card-subtitle mb-2 text-muted font-italic'>
          {user.username}
        </h6>
        <p className='card-text'>{post.body}</p>
        <a href='#' className='card-link'>
          <span className='mr-1'>5</span>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            class='bi bi-heart'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'
            />
          </svg>
        </a>
        <a href='#' className='card-link'>
          <span className='mr-1'>12</span>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            class='bi bi-bookmark-check'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z'
            />
            <path
              fill-rule='evenodd'
              d='M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z'
            />
          </svg>
        </a>
      </div>
      <a className=" w-auto" href={`/posts/${post.id}`}>  <button className='btn btn-outline-primary w-100'>Details</button></a>
    </div>
  );
};

module.exports = PostCard;
