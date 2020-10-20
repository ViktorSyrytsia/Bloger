const React = require('react');

const PostCard = ({ post, user }) => {
  return (
    <div className='card mt-5' style={{ width: '18rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{user.username}</h6>
        <p className='card-text'>{post.body}</p>
        <a href='#' className='card-link'>
          Vote
        </a>
        <a href='#' className='card-link'>
          Fav
        </a>
      </div>
    </div>
  );
};

module.exports = PostCard;
