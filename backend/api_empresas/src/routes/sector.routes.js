import { Router } from "express";

import { methodsSector as sectorController } from "../controllers/sector.controller";

const router = Router();

router.get("/", sectorController.getAllSectores);
router.post("/", sectorController.createSector);
router.get("/:id", sectorController.getSector);
router.put("/:id", sectorController.updateSector);
router.delete("/:id", sectorController.deleteSector);

export default router;
