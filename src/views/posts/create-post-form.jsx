const React = require('react');
const { Formik, Field, Form } = require('formik');
const Header = require('../header');

const Layout = require('../layout');

const CteatePostForm = () => (
  <Layout>
    <Header></Header>
    <div className='container'>
      <h1 className='mt-3 ml-3'>Create Post</h1>
      <div>
        <Formik
          initialValues={{
            title: '',
            body: '',
          }}
        >
          {({ isSubmitting }) => (
            <Form
              id='create_post_form'
              className='d-flex flex-column col-5 bg-light p-3 rounded-sm border'
              method='get'
              action='/posts'
            >
              <label htmlFor='title'>Title:</label>
              <Field
                id='post_title'
                className='border p-2'
                name='title'
                placeholder='post title...'
              />

              <label className='mt-3' htmlFor='body'>
                Body:
              </label>
              <Field
                id='post_body'
                className='border p-2'
                component='textarea'
                name='body'
                placeholder='text...'
              />

              <button
                className='mt-4 btn btn-primary w-25'
                type='submit'
                disabled={isSubmitting}
              >
                Create post
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    <script src='../create-post.js'></script>
  </Layout>
);

module.exports = CteatePostForm;
