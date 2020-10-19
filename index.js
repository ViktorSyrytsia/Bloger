const dotenv = require('dotenv');
const app = require('./src/app');
const db = require('./src/db/connection');

dotenv.config();

app.listen(process.env.PORT, () => {
  try {
    db(process.env.MONGO_URL, { useNewUrlParser: true });
    console.log(`Server started on port: ${process.env.PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
