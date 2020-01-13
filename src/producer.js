const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: '127.0.0.1:9092' });

const producer = new kafka.Producer(client);


const producerCb = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('producerCb ===> ', data);
};

producer.on('ready', () => {
  producer.send([
    {
      topic: 'topic1',
      messages: ['kafka message sending.', 'hello', 'world'],
      partition: 0,
      timestamp: Date.now(),
    },
    {
      topic: 'topic2',
      messages: ['kafka message sending experiment for topic2.', 'woohoo! I can send and receive messages.'],
    },
  ], producerCb);
});

producer.on('error', (err) => console.error(err));
