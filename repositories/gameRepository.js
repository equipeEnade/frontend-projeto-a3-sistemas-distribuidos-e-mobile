const Game = require("../models/Game");

class GameRepository {
  constructor() {}

  async ListAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      throw new Error("Error while fetching all games: " + error.message);
    }
  }

  async ListByGenre(_genre) {
    try {
      const games = await Game.find({ genre: _genre });
      return games;
    } catch (error) {
      throw new Error("Error while fetching games by genre: " + error.message);
    }
  }

  async ListAllByPlatform(_platform) {
    try {
      const games = await Game.find({ platform: _platform });
      return games;
    } catch (error) {
      throw new Error(
        "Error while fetching games by platform: " + error.message
      );
    }
  }

  async ListAllByPrice(x) {
    try {
      const games = await Game.find().sort({ price: x });
      return games;
    } catch (error) {
      throw new Error(
        "Error while fetching and sorting games by price: " + error.message
      );
    }
  }
}
