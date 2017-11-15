const express = require('express');
//const PORT = process.env.PORT || 3000;
const PORT = require(`./config/${process.env.NODE_ENV}`).PORT // based on NODE environment, use that environment's respective configuration
//NODE_ENV=production node server.js in your terminal window
const app = express();

const counter = {
  count: 0
}

app.use(express.static(__dirname + '/public'));

app.get('/api/counter', (req, res) => {
  res.json(counter)
})
app.get('/api/counter/increment', (req, res) => {
  ++counter.count;
  res.end();
})
app.get('/api/counter/decrement', (req, res) => {
  --counter.count;
  res.end();
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});