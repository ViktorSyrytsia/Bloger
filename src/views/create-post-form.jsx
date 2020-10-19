const React = require('react');
const { Formik, Field, Form } = require('formik');

const Layout = require('./layout');

const CteatePostForm = () => (
  <Layout>
    <h1 className='mt-3 ml-3'>Create Post</h1>
    <div>
      <Formik
        initialValues={{
          title: '',
          body: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className='d-flex flex-column col-5 bg-light p-3 rounded-sm border'
            method='post'
            action='/posts/new'
          >
            <label htmlFor='title'>Title:</label>
            <Field
              className='border p-2'
              name='title'
              placeholder='post title...'
            />

            <label className='mt-3' htmlFor='body'>
              Body:
            </label>
            <Field
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
  </Layout>
);

module.exports = CteatePostForm;
