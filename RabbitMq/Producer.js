const amqp = require('amqplib');

async function startProducer() {
    const connection = await amqp.connect('amqp://localhost'); // Replace with your RabbitMQ server URL
    const channel = await connection.createChannel();

    const testJson = {
        text: "Hello Students"
    }

    stringifiedJson = JSON.stringify(testJson);

    const queueName = 'test-queue'; // Replace with the name of the queue you want to send messages to
    const message = 'Hello, RabbitMQ!';

    await channel.assertQueue(queueName);

    // Send a message to the queue
    channel.sendToQueue(queueName, Buffer.from(stringifiedJson));
    //console.log(`Sent message: ${message}`);

    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500); // Close the connection after a short delay
}

startProducer();
