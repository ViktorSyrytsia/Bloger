const React = require('react');
const { Formik, Field, Form } = require('formik');

const Layout = require('../layout');
const Header = require('../header');

const Registration = ({ posts }) => {
  return (
    <Layout>
      <Header></Header>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className='d-flex flex-column col-5 bg-light p-3 rounded-sm border'
            method='post'
            action='/auth/register'
          >
            <label htmlFor='username'>Username:</label>
            <Field
              className='border p-2'
              name='username'
              placeholder='your username...'
            />

            <label className='mt-3' htmlFor='email'>
              Email:
              </label>
            <Field
              type='email'
              className='border p-2'
              name='email'
              placeholder='email...'
            />

            <label htmlFor='password'>Password:</label>
            <Field
              type='password'
              className='border p-2'
              name='password'
              placeholder='your password...'
            />

            <button
              className='mt-4 btn btn-primary w-25'
              type='submit'
              disabled={isSubmitting}
            >
              Sigh-up
              </button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

module.exports = Registration;
