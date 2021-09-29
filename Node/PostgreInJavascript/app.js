const { Client, Pool } = require('pg');

// Client connection

// const client = new Client({
//     user: 'postgres',
//     password: 'testing123',
//     host: 'localhost',
//     database: 'dvdrental',
//     port: '5432'
// });
// client.connect();

// const res = client.query("select * from public.actor", (err, res) => {
//     if (err){
//         console.log(err.message);
//     }

//     console.table(res.rows);
//     client.end();
// })

// Pool Connecton
var pool = new Pool({
    user: 'postgres',
    password: 'testing123',
    host: 'localhost',
    database: 'dvdrental',
    port: '5432'
});
// pool.query("select * from public.actor limit 10", (err, res) => {
//     if (err){
//         console.log(err.stack);
//     }
//     else {
//         console.table(res.rows);
//     }
// })

// Passing parameters to queries
// Sql Injection
// var user_parameter = "1";

// var query = "select * from public.actor where actor_id=" + user_parameter;

// pool.query(query, (err, res) => {
//     if (err){
//         console.log(err.stack);
//     }
//     else {
//         console.table(res.rows);
//     }
// })

// Parameterized queries:
// Sql Injection safe
// var user_parameters = ["1; insert into public.actor (first_name, last_name) values ('','');"];

// var query = "select * from public.actor where actor_id=$1";

// pool.query(query, user_parameters, (err, res) => {
//     if (err){
//         console.log(err.stack);
//     }
//     else {
//         console.table(res.rows);
//     }
// })

// Different ways to execute a query:
// Callback function

// var test = 1;
// test = 2;
// test = 3;

// pool.query(query, user_parameters, (err, res) => {
//     if (err){
//         console.log(err.stack);
//     }
//     else {
//         console.table(res.rows);
//     }
// })
// test = 4;
// test = 5;

//promises
var user_parameters = ["1"];

var query = "select * from public.actor3 where actor_id=$1";

// pool.query(query, user_parameters)
// .then(res => {
//     console.table(res.rows);
// })
// .catch(e => console.error(e.stack))

// async await 
// get errors with try/catch

    // const res = await pool.query(query, user_parameters);
    // console.table(res.rows)

// Insert 

// var query = `
//     insert into public.actor (first_name, last_name)
//     values ($1, $2) returning actor_id;
// `

// var parameters = ["John", "Doe"]

// pool.query(query, parameters)
// .then(res => {
//     console.table(res.rows);
// })
// .catch(e => console.error(e.stack))

// Update

var updateQuery = `
    update actor
    SET first_name = 'Paul'
    where actor_id < 10 returning *;
`;

var updateParameters = ["206"]

pool.query(updateQuery, (err, res) => {
    if (err){
        console.log(err.stack);
    }
    else {
        console.table(res.rows);
    }
})