const React = require('react');

const Layout = require('./layout');
const PostCard = require('./post-card');

const Post = ({ posts }) => {
  return (
    <Layout>
      {posts &&
        posts.map((post) => (
          <PostCard key={post._id} post={post} user={post.author}></PostCard>
        ))}
    </Layout>
  );
};

module.exports = Post;
