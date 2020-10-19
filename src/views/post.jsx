const React = require('react');

const Layout = require('./layout');

const Post = ({ post }) => {
  return <Layout>{post.title}</Layout>;
};

module.exports = Post;
