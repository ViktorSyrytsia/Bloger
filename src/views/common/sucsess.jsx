const React = require('react');
const { AES } = require('crypto-js');
const Layout = require('../layout');
const Header = require('../header');

const Sucsess = ({ user }) => {
  const token = AES.encrypt(user.token, 'secret').toString();
  return (
    <Layout>
      <Header></Header>
      <div className="modal" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.4)" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Complete registration</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{`User: ${user.username} / ${user.email} succssesfuly registered`}</p>
            </div>
            <div className="modal-footer">
              <button id='user_reg_completed' type="button" className="btn btn-primary">
                <span id='token'>{token}</span>
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      <script src='../register-success.js'></script>
    </Layout>
  );
};

module.exports = Sucsess;
