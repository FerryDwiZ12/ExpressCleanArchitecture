const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  singer: { type: String, required: true },
  plays: { type: Number, required: true },
  duration: { type: String, required: true },
  favorite: { type: Boolean, default: false },
},{ collection: "Songs" });

const Song = mongoose.model("Songs", songsSchema);

module.exports = Song;
