import express from 'express';
import { data } from './facts.js';

const app = express();
app.set('port', process.env.PORT || 3000);

const numFacts = data.length;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get('/api/facts', (req, res) => {
  console.log(req.query); // Display parsed querystring object
  console.log(req.query.number);
  const number = parseInt(req.query.number, 10);

  // Create a Set to store unique facts
  const factsSet = new Set();
  
  // Generate unique facts until the desired number is reached
  while (factsSet.size < number) {
    const facts_index = getRandomInt(numFacts);
    factsSet.add(data[facts_index]);
  }

  // Convert the Set back to an array
  const factsArray = Array.from(factsSet);

  res.type('json');
  res.status(200);
  res.json({
    facts: factsArray,
    success: true
  });
});

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
  console.log('Express started');
});
