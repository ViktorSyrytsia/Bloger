const React = require('react');
const axios = require('axios').default;

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        Blog
      </a>
      <button
        className='navbar-toggler'
        type='button'
        datatoggle='collapse'
        datatarget='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav flex-grow-1'>
          <li className='nav-item active '>
            <a className='nav-link' href='/posts'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item mr-auto'>
            <a className='nav-link' href='/posts/create-post-form'>
              Create post
            </a>
          </li>
          <li id='register' className='nav-item '>
            <a className='nav-link' href='/auth/registration-form'>
              Register
            </a>
          </li>
          <li id='login' className='nav-item'>
            <a className='nav-link' href='/auth/login-form'>
              Login
            </a>
          </li>
          <li className='nav-item '>
            <a className='nav-link' href='/auth/logout'>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

module.exports = Header;
