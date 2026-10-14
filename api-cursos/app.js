import express from "express";
import routes from "./src/routes/index.js";

const app = express();

// Middleware para transformar peticiones con cuerpo JSON (Diapositiva 41)
app.use(express.json());

// Montaje de rutas y endpoints
// Permite acceder tanto directamente (/cursos, /estudiantes, /profesores)
// como con prefijo de API (/api/cursos, etc.)
app.use("/", routes);
app.use("/api", routes);

export default app;
