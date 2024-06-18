const getTokenMiddleware = require("../middleware/getTokenBot");
const cron = require("node-cron");
const router = require("express").Router();
const TelegramBot = require("node-telegram-bot-api");

router.post("/", getTokenMiddleware, async (req, res) => {
  try {
    if (!req.body.message) {
      return res.status(400).json({ message: "Message is required" });
    }

    // https://apps.timwhitlock.info/emoji/tables/unicode
    const result = await req.bot.sendMessage(req.groupId, req.body.message, {
      parse_mode: "html",
    });

    res.status(200).json({ message: "Message sent successfully", status: 200 });
  } catch (err) {
    res.status(500).json({ message: "Error sending message", status: 500 });
  }
});

module.exports = router;
