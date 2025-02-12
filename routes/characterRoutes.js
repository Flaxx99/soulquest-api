const express = require('express');
const Character = require('../models/Character');
const router = express.Router();

// Obtener el personaje principal
router.get('/', async (req, res) => {
    try {
        const character = await Character.findOne();
        if (!character) return res.status(404).json({ message: "Personaje no encontrado" });
        res.json(character);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el personaje" });
    }
});

// Crear o actualizar el personaje
router.post('/', async (req, res) => {
    try {
        const { name, image, health } = req.body;
        let character = await Character.findOne();

        if (character) {
            character.name = name;
            character.image = image;
            character.health = health;
            await character.save();
            return res.json(character);
        }

        character = new Character({ name, image, health });
        await character.save();
        res.status(201).json(character);
    } catch (error) {
        res.status(400).json({ message: "Error al crear o actualizar el personaje" });
    }
});

// Actualizar la vida del personaje
router.put('/health', async (req, res) => {
    try {
        const { health } = req.body;
        let character = await Character.findOne();
        if (!character) return res.status(404).json({ message: "Personaje no encontrado" });

        character.health = health;
        await character.save();

        res.json({ message: "Vida actualizada con éxito", health: character.health });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la vida del personaje" });
    }
});

module.exports = router;
