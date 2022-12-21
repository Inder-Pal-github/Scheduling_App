const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(PORT, async () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
