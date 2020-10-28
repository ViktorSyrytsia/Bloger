const React = require('react');
const PropTypes = require('prop-types');

function Layout(props) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        ></meta>
        <title>Blog</title>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
          integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2'
          crossOrigin='anonymous'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        `,
          }}
        />
      </head>
      <body>{props.children}</body>
      <script src="../main.js"></script>
    </html>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
};

module.exports = Layout;
