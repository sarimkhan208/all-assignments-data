const mongoose = require("mongoose")
require("dotenv").config()

// setting up the connection to Database
const connection = mongoose.connect(process.env.mongoURL)

const playerSchema = mongoose.Schema(
    {
        "player_name": String,
        "position": String,
        "team": String,
        "goals": Number,
        "assists": Number,
        "nationality": String,
        "age": Number,
        "mutable":Boolean
    }
)

const PlayerModel = mongoose.model("player",playerSchema)

module.exports = {
    connection,
    PlayerModel
}