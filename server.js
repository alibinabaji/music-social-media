const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "music_player",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

app.get("/api/songs/all", async (req, res) => {
  try {
    const songs = await db.query("SELECT * FROM songs");
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/playlists/:playlistId/songs", async (req, res) => {
  try {
    const { playlistId } = req.params;
    const sql = `
      SELECT s.*
      FROM songs s
      INNER JOIN playlistsongs ps ON s.song_id = ps.song_id
      WHERE ps.playlist_id = ?
    `;
    db.query(sql, [playlistId], (err, songs) => {
      if (err) {
        console.error("Error retrieving playlist songs:", err);
        return res
          .status(500)
          .json({ error: "An error occurred while retrieving playlist songs" });
      }
      res.json(songs);
    });
  } catch (error) {
    console.error("Error retrieving playlist songs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/playlists/:playlistId/addNew", async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { songTitle, artist, audioUrl, userId } = req.body;

    if (!songTitle || !artist || !audioUrl || !userId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const insertSongSql =
      "INSERT INTO Songs (title, artist, audio_url, user_id, created_at) VALUES (?, ?, ?, ?, NOW())";
    const songValues = [songTitle, artist, audioUrl, userId];
    db.query(insertSongSql, songValues, (err, result) => {
      if (err) {
        console.error("Error adding song:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      const insertedSongId = result.insertId;

      const insertPlaylistSongSql =
        "INSERT INTO PlaylistSongs (playlist_id, song_id) VALUES (?, ?)";
      const playlistSongValues = [playlistId, insertedSongId];
      db.query(insertPlaylistSongSql, playlistSongValues, (err) => {
        if (err) {
          console.error("Error associating song with playlist:", err);
          return res.status(500).json({ error: "Internal server error" });
        }

        res.status(201).json({
          message: "Song added to playlist successfully",
          songId: insertedSongId,
        });
      });
    });
  } catch (error) {
    console.error("Error adding song to playlist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/playlists/all", (req, res) => {
  const sql = "SELECT * FROM Playlists";
  db.query(sql, (err, playlists) => {
    if (err) {
      console.error("Error retrieving playlists:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving playlists" });
    }
    res.json(playlists);
  });
});

app.post("/api/playlists/create", (req, res) => {
  const { name, description, coverUrl } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  const sql = "INSERT INTO playlists (name, description) VALUES (?, ?)";
  db.query(sql, [name, description, coverUrl], (err, result) => {
    if (err) {
      console.error("Error adding playlist:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while adding the playlist" });
    }
    console.log("Playlist added:", result);
    res.status(201).json({ success: true, playlistId: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
