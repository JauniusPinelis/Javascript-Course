const amqp = require('amqplib');

async function startSubscriber() {
    const connection = await amqp.connect('amqp://localhost'); // Replace with your RabbitMQ server URL
    const channel = await connection.createChannel();

    const queueName = 'test-queue'; // Replace with the name of the queue you want to subscribe to

    await channel.assertQueue(queueName);
    console.log(`Waiting for messages in ${queueName}. To exit, press CTRL+C`);

    channel.consume(queueName, (message) => {
        console.log(`Received message: ${message.content.toString()}`);
    }, {
        noAck: true, // Automatically acknowledge the received messages
    });
}

startSubscriber();
