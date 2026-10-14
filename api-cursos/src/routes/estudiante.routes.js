import { Router } from "express";
import {
  getEstudiantes,
  getEstudianteById,
  postEstudiante,
  putEstudiante,
  deleteEstudiante
} from "../controllers/estudiante.controller.js";

const router = Router();

// Endpoints para Estudiantes (Páginas 38 y 43-47 del PDF)
// GET /estudiantes -> Listar todos
router.get("/", getEstudiantes);

// GET /estudiantes/:id -> Consultar por ID
router.get("/:id", getEstudianteById);

// POST /estudiantes -> Crear un nuevo estudiante
router.post("/", postEstudiante);

// PUT /estudiantes/:id -> Actualizar un estudiante por ID
router.put("/:id", putEstudiante);

// DELETE /estudiantes/:id -> Eliminar un estudiante por ID
router.delete("/:id", deleteEstudiante);

export default router;
