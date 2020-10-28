const React = require('react');

const Layout = require('../layout');
const Header = require('../header');

const PostDetail = ({ post, user }) => {
  return (
    <Layout>
      <Header></Header>
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-header text-dark font-weight-bolder">
            {user.username} / {user.email}
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <a className="btn btn-danger">Like</a>
              <a className="btn btn-primary">Add to Fav</a>
            </div>
          </div>
          <div className="card-footer text-muted">
            {post.date.toString().slice(0, 25)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

module.exports = PostDetail;
