import express from "express";
import Costume from "../models/Costume";

const router = express.Router();

// GET /api/costumes - basic query support
router.get("/", async (req, res, next) => {
  try {
    const { danceForm, city, mode } = req.query as any;
    const q: any = {};
    if (danceForm) q.danceForm = danceForm;
    if (city) q.location = city;

    // mode (rent/buy) is handled in frontend; we still return full object
    const costumes = await Costume.find(q).sort({ title: 1 }).lean();
    res.json(costumes);
  } catch (err) {
    next(err);
  }
});

// GET /api/costumes/:id
router.get("/:id", async (req, res, next) => {
  try {
    const costume = await Costume.findById(req.params.id).lean();
    if (!costume) return res.status(404).json({ error: "Costume not found" });
    res.json(costume);
  } catch (err) {
    next(err);
  }
});

export default router;
