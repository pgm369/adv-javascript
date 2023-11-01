import express from 'express';
import {data} from './facts.js';


const app = express();
app.set('port', process.env.PORT || 3000);

/*
Express simplifies the work of getting querystring data and form submissions.

You can access querystring values with the req.query object like so:
*/
app.get('/api/facts', (req, res) => {
    const number = parseInt(req.query.number, 10); // Parse the number parameter as an integer
    const selectedFacts = data.slice(0, number); // Get the first 'number' facts
  
    res.type('json');
    res.status(200);
    res.json({
      facts: selectedFacts,
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