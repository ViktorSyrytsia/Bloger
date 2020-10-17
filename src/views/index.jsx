const React = require('react');
const Layout = require('./layout');

function countTo(n) {
    const a = [];
    for (let i = 0; i < n; i++) {
        a.push(i + 1);
    }
    return a.join(', ');
}

function Index(props) {
    return (
        <Layout title={props.title}>
            <h1>{props.title}</h1>
            <p>Welcome to {props.title}</p>
            <p>
                I can count to 10:
        {countTo(10)}
            </p>
        </Layout>
    );
}

module.exports = Index;