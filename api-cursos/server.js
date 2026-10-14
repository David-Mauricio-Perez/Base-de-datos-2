import { config } from "dotenv";
import app from "./app.js";
import { conectarDB } from "./src/config/database.js";

// Cargar variables de entorno desde el archivo .env (Diapositiva 53)
config();

const PORT = process.env.PORT || 3000;

const iniciarServidor = async () => {
  // 1. Conectar a la base de datos MongoDB con Mongoose
  await conectarDB();

  // 2. Iniciar el servidor HTTP Express
  app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en: http://localhost:${PORT}`);
    console.log(`📚 Endpoints disponibles:`);
    console.log(`   - Cursos:      http://localhost:${PORT}/cursos`);
    console.log(`   - Estudiantes: http://localhost:${PORT}/estudiantes`);
    console.log(`   - Profesores:  http://localhost:${PORT}/profesores`);
  });
};

iniciarServidor();
