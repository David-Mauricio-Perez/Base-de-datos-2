import mongoose from "mongoose";

// Modelo Curso (Página 54 del PDF: Código, Nombre, Créditos, Profesor, Estado)
const cursoSchema = new mongoose.Schema(
  {
    codigo: {
      type: String,
      required: [true, "El código del curso es obligatorio"],
      unique: true,
      trim: true
    },
    nombre: {
      type: String,
      required: [true, "El nombre del curso es obligatorio"],
      trim: true
    },
    creditos: {
      type: Number,
      required: [true, "El número de créditos es obligatorio"],
      min: [1, "Los créditos deben ser mayores a 0"]
    },
    profesor: {
      type: String,
      required: [true, "El nombre del profesor es obligatorio"],
      trim: true
    },
    estado: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

const Curso = mongoose.model("Curso", cursoSchema, "cursos");

export default Curso;
