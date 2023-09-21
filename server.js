const http = require("http");
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 8888;

const responseData = [
  { code: 401, message: 'You are not authorized to do that!'},
  { code: 404, message: 'Page not found' },
  { code: 500, message: 'Internal Server Error' },
];

const app = express();

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(morgan("common"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get('/data', (req, res) => {
  res.json({ response: responseData[Math.round(Math.random() * 2)] });
})

startServer();