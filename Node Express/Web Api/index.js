const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

const chalk = require('chalk');

const connectionUrl = 'mongodb://localhost:27017'
const databaseName = "user-database";

MongoClient.connect(connectionUrl, {}, (error, client) => {
    if (error){
        console.log(error);
        return;
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Steven',
    //     age: 32
    // })

    // db.collection('users').insertMany([
    //     {
    //         firstName: 'Paul'
    //     },
    //     {
    //         fullName: 'Ellen Smith'
    //     }
    // ])
    // db.collection('users').find({ name: 'Steven'}).toArray((error, users) => {
    //     console.table(users);
    // })

    // db.collection('users').findOne({_id: new ObjectID("6179bcc34f2b20c9a753aebb")}, (error, user) => {
    //     console.log(user)
    // })

    const doWorkPromise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First task")
        }, 2000)
    })

    const doWork2Promise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Ths task shold be ran after the first task")
        }, 2000)
    })

    const doWork3Promise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This task shold be ran after the second task")
        }, 2000)
    })

    var asynchronousFunction = async () => {
        try {
            var result = await doWorkPromise();
            console.log(result);
            result = await doWork2Promise()
            console.log(result);
            result = await doWork3Promise();
            console.log(result);
        }
        catch(err) {
            console.log(chalk.red(err));
        }
    }

    asynchronousFunction();

    // doWorkPromise.then((message) => {
    //     // This will be executed if resolved
    //     console.log(chalk.green(message))

    //     doWork2Promise.then((work2Message) => {
    //         console.log(chalk.blueBright(work2Message))
            
    //         doWork3Promise.then((work3Message) => {
    //             console.log(chalk.cyan(work3Message))
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(chalk.red(err));
    //     })
    // })
    // .catch((err) => {
    //     console.log(chalk.red(err))
    // })
})