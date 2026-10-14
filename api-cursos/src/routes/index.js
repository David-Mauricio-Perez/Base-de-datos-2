import { Router } from "express";
import cursoRoutes from "./curso.routes.js";
import estudianteRoutes from "./estudiante.routes.js";
import profesorRoutes from "./profesor.routes.js";

const router = Router();

// Endpoint informativo raíz con la lista de todos los endpoints disponibles
router.get("/", (req, res) => {
  res.json({
    nombre: "API de Gestión Académica (Cursos, Estudiantes, Profesores)",
    version: "1.0.0",
    recursos: {
      cursos: {
        listar: "GET /cursos",
        consultarUno: "GET /cursos/:id",
        crear: "POST /cursos",
        actualizar: "PUT /cursos/:id",
        eliminar: "DELETE /cursos/:id"
      },
      estudiantes: {
        listar: "GET /estudiantes",
        consultarUno: "GET /estudiantes/:id",
        crear: "POST /estudiantes",
        actualizar: "PUT /estudiantes/:id",
        eliminar: "DELETE /estudiantes/:id"
      },
      profesores: {
        listar: "GET /profesores",
        consultarUno: "GET /profesores/:id",
        crear: "POST /profesores",
        actualizar: "PUT /profesores/:id",
        eliminar: "DELETE /profesores/:id"
      }
    }
  });
});

// Enrutadores principales
router.use("/cursos", cursoRoutes);
router.use("/estudiantes", estudianteRoutes);
router.use("/profesores", profesorRoutes);

export default router;
