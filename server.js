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

  const log = {
    user: username,
    ip: ip,
    time: new Date().toLocaleString()
  };

  console.log("⚡ LOGIN DETECTED ⚡");
  console.log(log);
  console.log("----------------------");

  res.json({ success: true });
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
