import { Router } from "express";

import { methodsEmpresa as empresaController } from "../controllers/empresa.controller";

const router = Router();

router.get("/", empresaController.getAllEmpresas);
router.post("/", empresaController.createEmpresa);
router.get("/:id", empresaController.getEmpresa);
router.put("/:id", empresaController.updateEmpresa);
router.delete("/:id", empresaController.deleteEmpresa);

export default router;