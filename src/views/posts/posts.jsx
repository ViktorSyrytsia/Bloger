const React = require('react');

const Layout = require('../layout');
const PostCard = require('./post-card');
const Header = require('../header');

const Posts = ({ posts }) => {
  return (
    <Layout>
      <Header></Header>
      <div className='container d-flex flex-wrap justify-content-center mb-5'>
        {posts &&
          posts.map((post) => (
            <PostCard key={post._id} post={post} user={post.author}></PostCard>
          ))}
      </div>
      <div className='d-flex justify-content-center mb-5'>
        <button className='btn btn-primary mx-auto'>Load more...</button>
      </div>
    </Layout>
  );
};

module.exports = Posts;
