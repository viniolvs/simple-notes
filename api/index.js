const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
process.env.TZ = 'America/Sao_Paulo';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use("/", require("./routes"));

// Conexão ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.log(err)
    process.exit(1)
  });

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
