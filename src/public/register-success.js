const crypro = document.createElement('script');
crypro.setAttribute(
  'src',
  'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js'
);
crypro.setAttribute(
  'integrity',
  'sha512-nOQuvD9nKirvxDdvQ9OMqe2dgapbPB7vYAMrzJihw5m+aNcf0dX53m6YxM4LgA9u8e9eg9QX+/+mPu8kCNpV2A=='
);
crypro.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(crypro);

const token = document.getElementById('token');
token.hidden = true;

const user_reg_success_btn = document.getElementById('user_reg_completed');
user_reg_success_btn.addEventListener('click', (e) => {
  const bytes = this.CryptoJS.AES.decrypt(token.innerHTML, 'secret');
  const originalToken = bytes.toString(this.CryptoJS.enc.Utf8);
  console.log(originalToken);
  localStorage.setItem('token', originalToken);
});
