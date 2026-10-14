import Curso from "../models/curso.model.js";

// Capa de Servicio para Cursos: lógica de acceso a datos con Mongoose
export const obtenerTodosLosCursos = async () => {
  return await Curso.find();
};

export const obtenerCursoPorId = async (id) => {
  return await Curso.findById(id);
};

export const crearCurso = async (datosCurso) => {
  return await Curso.create(datosCurso);
};

export const actualizarCurso = async (id, datosActualizados) => {
  return await Curso.findByIdAndUpdate(id, datosActualizados, {
    new: true,
    runValidators: true
  });
};

export const eliminarCurso = async (id) => {
  return await Curso.findByIdAndDelete(id);
};

export default {
  obtenerTodosLosCursos,
  obtenerCursoPorId,
  crearCurso,
  actualizarCurso,
  eliminarCurso
};
