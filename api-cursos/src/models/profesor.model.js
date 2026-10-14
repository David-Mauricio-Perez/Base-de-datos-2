import mongoose from "mongoose";

// Modelo Profesor: Nombre, Email, Departamento, Activo
const profesorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre del profesor es obligatorio"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      trim: true,
      lowercase: true
    },
    departamento: {
      type: String,
      required: [true, "El departamento o área de especialidad es obligatorio"],
      trim: true
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

const Profesor = mongoose.model("Profesor", profesorSchema, "profesores");

export default Profesor;
