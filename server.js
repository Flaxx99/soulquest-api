const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const characterRoutes = require('./routes/characterRoutes');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/character', characterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
