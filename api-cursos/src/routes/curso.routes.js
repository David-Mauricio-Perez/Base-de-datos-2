import { Router } from "express";
import {
  getCursos,
  getCursoById,
  postCurso,
  putCurso,
  deleteCurso
} from "../controllers/curso.controller.js";

const router = Router();

// Endpoints para Cursos (Páginas 38 y 54 del PDF)
// GET /cursos -> Listar todos
router.get("/", getCursos);

// GET /cursos/:id -> Consultar un curso por ID
router.get("/:id", getCursoById);

// POST /cursos -> Crear un nuevo curso
router.post("/", postCurso);

// PUT /cursos/:id -> Actualizar un curso por ID
router.put("/:id", putCurso);

// DELETE /cursos/:id -> Eliminar un curso por ID
router.delete("/:id", deleteCurso);

export default router;
