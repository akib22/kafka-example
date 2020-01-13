const kafka = require('kafka-node');

const client = new kafka.KafkaClient();
const consumer = new kafka.Consumer(
  client,
  [
    { topic: 'topic1' },
    { topic: 'topic2' },
  ],
  {
    autoCommit: false,
  },
);

consumer.on('message', (msg) => console.log('message ===> ', msg));

consumer.on('error', (err) => console.error('consumer error ===> ', err));
