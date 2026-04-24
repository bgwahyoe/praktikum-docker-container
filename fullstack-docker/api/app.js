const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// koneksi ke MongoDB (pakai nama service: mongodb)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.json({ message: "API jalan bro 🔥" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
