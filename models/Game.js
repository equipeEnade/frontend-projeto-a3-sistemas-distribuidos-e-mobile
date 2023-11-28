const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: String,
    price: Number,
    rate: Number,
    genre: [String],
    platform: [String],
    imageURL: String,
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
