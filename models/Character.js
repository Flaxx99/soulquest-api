const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({ //creacion de base de datos personaje
    name: { type: String, required: true },
    image: { type: String, required: true },
    health: { type: Number, required: true }
});

module.exports = mongoose.model('Character', CharacterSchema);
