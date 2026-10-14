import mongoose from "mongoose";

// Modelo Estudiante (Páginas 27-28 del PDF: Nombre, Edad, Email, Activo)
const estudianteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre del estudiante es obligatorio"],
      trim: true
    },
    edad: {
      type: Number,
      required: [true, "La edad es obligatoria"],
      min: [1, "La edad debe ser mayor a 0"]
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      trim: true,
      lowercase: true
    },
    activo: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

const Estudiante = mongoose.model("Estudiante", estudianteSchema, "estudiantes");

export default Estudiante;
