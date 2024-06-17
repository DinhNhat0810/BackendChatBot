const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
const messageRoute = require("./routes/sendMessages.js");
const botRoute = require("./routes/bots.js");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(cors());

app.use("/api/send-message", messageRoute);
app.use("/api/bots", botRoute);

app.listen(port, "0.0.0.0", () => {
  // telegrambot("Bot chào chị Vân");
  console.log("Server running on port 4000");
  console.log(`Example app listening at http://localhost:${port}`);
});
