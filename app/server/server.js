const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 8080;
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const app = express();
let cards = JSON.parse(fs.readFileSync("./data/cards.json"));

app.use(express.json());
app.use(cors());

// Use app.route for the /api/cards endpoint
app
  .route("/api/cards")
  .get((_req, res) => {
    let cards = JSON.parse(fs.readFileSync("./data/cards.json"));
    res.status(200).json({ message: "GET request successful", cards });
  })
  .post((req, res) => {
    const {
      name,
      description,
      includedPatterns,
      excludedPatterns,
      sensitivity,
    } = req.body;

    const newCard = {
      id: uuidv4(),
      name,
      description,
      includedPatterns,
      excludedPatterns,
      sensitivity,
    };
    cards.push(newCard);

    fs.writeFileSync("./data/cards.json", JSON.stringify(cards, null, 2));
    res.status(201).json(newCard);
  });

app.delete("/api/cards/:id", (req, res) => {
  const { id } = req.params;
  const cardIndex = cards.findIndex((card) => card.id === id);

  if (cardIndex === -1) {
    return res.status(404).json({ message: "Card not found" });
  }
  cards.splice(cardIndex, 1);
  fs.writeFileSync("./data/cards.json", JSON.stringify(cards, null, 2));
  res
    .status(204)
    .json({ message: "Security Card with ID ${id} deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
