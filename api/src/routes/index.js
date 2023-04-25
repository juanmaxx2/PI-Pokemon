const { Router } = require('express');
const getPokemon = require('../controllers/getPokemon');
const getPokemonById = require('../controllers/getPokemonById');
const createPokemon = require('../controllers/createPokemon');
const getType = require('../controllers/getType');

const router = Router();

router.post("/pokemons", createPokemon);
router.get("/pokemons", getPokemon);
router.get("/pokemons/:id", getPokemonById);
router.get("/type", getType);

module.exports = router;