const app = require('./src/app');
const db = require('./src/db/connection');

app.listen(3000, () => {
    try {
        db('mongodb://localhost:27017/blog', { useNewUrlParser: true });
        console.log('Sever started');
    } catch (error) {
        console.log(error);
    }
})