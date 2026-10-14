import { Router } from "express";
import {
  getProfesores,
  getProfesorById,
  postProfesor,
  putProfesor,
  deleteProfesor
} from "../controllers/profesor.controller.js";

const router = Router();

// Endpoints para Profesores
// GET /profesores -> Listar todos
router.get("/", getProfesores);

// GET /profesores/:id -> Consultar por ID
router.get("/:id", getProfesorById);

// POST /profesores -> Crear un nuevo profesor
router.post("/", postProfesor);

// PUT /profesores/:id -> Actualizar un profesor por ID
router.put("/:id", putProfesor);

// DELETE /profesores/:id -> Eliminar un profesor por ID
router.delete("/:id", deleteProfesor);

export default router;
