const amqp = require('amqplib');
class MQService {
    constructor() {
        this.connection = null;
        this.channel = null;
    }
    async connect() {
        try {
            this.connection = await amqp.connect(process.env.RABBITMQ_URL);
            this.channel = await this.connection.createChannel();
            console.log('Connected to RabbitMQ');
        } catch (error) {
            // add error handling logic here later
            console.error('Failed to connect to RabbitMQ', error);
            process.exit(1);
        }
    }

    async publish(queue, message) {
        if (!this.channel) {
            await this.connect();
        }
        await this.channel.assertQueue(queue, { durable: true });
        this.channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
    }

    async consume(queue, callback) {
        if (!this.channel) {
            await this.connect();
        }
        await this.channel.assertQueue(queue, { durable: true });
        this.channel.consume(queue, (msg) => {
            if (msg !== null) {
                callback(msg.content.toString());
                this.channel.ack(msg);
            }
        });
    }

    async disconnect() {
        await this.channel.close();
        await this.connection.close();
    }
}

module.exports = new MQService();