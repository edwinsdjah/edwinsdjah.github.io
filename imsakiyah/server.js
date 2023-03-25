const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/api', async (req, res) => {
  const apiKey = '4b7007fb5b96d466c2dc31096729eff3';
  const url = `https://muslimsalat.com/daily.json?key=${apiKey}&country=Indonesia`;

  const response = await fetch(url);
  const data = await response.json();

  res.header('Access-Control-Allow-Origin', '*');
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
