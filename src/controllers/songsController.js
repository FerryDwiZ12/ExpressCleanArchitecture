// src/controllers/songController.js
const Song = require("../models/songsModel");

const createSong = async (req, res) => {
  try {
    const { title, singer, plays, duration, favorite } = req.body;
    const song = new Song({ title, singer, plays, duration, favorite });
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSong = async (req, res) => {
  try {
    const { title, singer, plays, duration, favorite } = req.body;
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    song.title = title;
    song.singer = singer;
    song.plays = plays;
    song.duration = duration;
    song.favorite = favorite;
    await song.save();
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
};
