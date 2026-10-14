import Estudiante from "../models/estudiante.model.js";

// Capa de Servicio para Estudiantes
export const obtenerTodosLosEstudiantes = async () => {
  return await Estudiante.find();
};

export const obtenerEstudiantePorId = async (id) => {
  return await Estudiante.findById(id);
};

export const crearEstudiante = async (datosEstudiante) => {
  return await Estudiante.create(datosEstudiante);
};

export const actualizarEstudiante = async (id, datosActualizados) => {
  return await Estudiante.findByIdAndUpdate(id, datosActualizados, {
    new: true,
    runValidators: true
  });
};

export const eliminarEstudiante = async (id) => {
  return await Estudiante.findByIdAndDelete(id);
};

export default {
  obtenerTodosLosEstudiantes,
  obtenerEstudiantePorId,
  crearEstudiante,
  actualizarEstudiante,
  eliminarEstudiante
};
