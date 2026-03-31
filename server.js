const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/login-monitor", (req, res) => {
  const { username } = req.body;

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  console.log("Login detected:");
  console.log("User:", username);
  console.log("IP:", ip);
  console.log("Time:", new Date().toLocaleString());
  console.log("--------------------");

  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});