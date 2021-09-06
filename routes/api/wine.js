const express = require("express");
const router = express.Router();

const Wine = require("../../models/Wine");

// @route  POST /wine
// @desc   Create a wine
// @access Public
router.post("/", async (req, res) => {
  const {
    type,
    image,
    vintage,
    grape,
    vinyard,
    region,
    country,
    aromas,
    body,
    sweetness,
    acidity,
    tannins,
    alcohol,
  } = req.body;

  // Build wine Object
  const wineFields = {};
  wineFields.type = type;
  wineFields.image = image;
  wineFields.vintage = vintage;
  wineFields.grape = grape;
  wineFields.vinyard = vinyard;
  wineFields.region = region;
  wineFields.country = country;
  // Build wine tasting notes Object
  wineFields.aromas = aromas.split(",").map((aroma) => aroma.trim());
  wineFields.body = body;
  wineFields.sweetness = sweetness;
  wineFields.acidity = acidity;
  wineFields.tannins = tannins;
  if (alcohol) wineFields.alcohol = alcohol;

  try {
    // Create wine
    let wine = new Wine(wineFields);

    await wine.save();
    res.json(wine);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /wine/:id
// @desc   Get wine by ID
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);

    if (!wine) return res.status(404).json({ msg: "Wine not found" });

    res.json(wine);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Wine not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route  GET /wine || /wine?type=red&body=full
// @desc   Find/filter all wines by query
// @access Public
router.get("/", async (req, res) => {
  try {
    // Build Query
    const queryObject = { ...req.query };
    console.log(req.query);
    const query = Wine.find(queryObject);

    // Execute Query
    const wines = await query;

    // Send Response
    res.json({
      results: wines.length,
      data: {
        wines,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  PATCH /:id
// @desc   Update wine by ID
// @access Public
router.patch("/:id", async (req, res) => {
  try {
    const wine = await Wine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!wine) return res.status(404).json({ msg: "Wine not found" });

    res.json({
      status: 'Successfully updated',
      data: {
        wine,
      },
    });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Wine not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route  DELETE /:id
// @desc   Delete wine by ID
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    await Wine.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Successfully deleted',
      data: null,
    });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Cannot delete, wine not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
