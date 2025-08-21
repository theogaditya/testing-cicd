const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

const port = 3000;
const databaseUrl = process.env.DATABASE_URL;
const cors = process.env.cors;

app.get('/', (req, res) => {
  res.send(`Hello World! 
    my db: ${databaseUrl}
    my cors policy: ${cors}`); 

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

