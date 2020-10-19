const React = require('react');
const { useFormik } = require('formik');
const axios = require('axios').default;

const Layout = require('./layout');

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      body: ''
    },
    onSubmit: values => {
      axios
        .post('/posts/new', {
          ...values
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
  return (
    <Layout>
      <form method='post' onSubmit={formik.handleSubmit}>
        <label htmlFor='title'>Post Title</label>
        <input id='title' name='title' type='title' onChange={formik.handleChange} value={formik.values.title} />
        <label htmlFor='body'>Post Body</label>
        <input id='body' name='body' type='body' onChange={formik.handleChange} value={formik.values.body} />
        <button type='submit'>Submit</button>
      </form>
    </Layout>
  );
};

module.exports = SignupForm;
