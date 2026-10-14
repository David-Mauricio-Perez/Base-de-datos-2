import mongoose from "mongoose";

// Conexión a MongoDB con Mongoose (Diapositivas 26 y 40)
export const conectarDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || process.env.URL_BD || "mongodb://localhost:27017/universidad";
    await mongoose.connect(uri);
    console.log("✅ Conectado exitosamente a MongoDB con Mongoose");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};
