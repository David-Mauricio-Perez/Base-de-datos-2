import Profesor from "../models/profesor.model.js";

// Capa de Servicio para Profesores
export const obtenerTodosLosProfesores = async () => {
  return await Profesor.find();
};

export const obtenerProfesorPorId = async (id) => {
  return await Profesor.findById(id);
};

export const crearProfesor = async (datosProfesor) => {
  return await Profesor.create(datosProfesor);
};

export const actualizarProfesor = async (id, datosActualizados) => {
  return await Profesor.findByIdAndUpdate(id, datosActualizados, {
    new: true,
    runValidators: true
  });
};

export const eliminarProfesor = async (id) => {
  return await Profesor.findByIdAndDelete(id);
};

export default {
  obtenerTodosLosProfesores,
  obtenerProfesorPorId,
  crearProfesor,
  actualizarProfesor,
  eliminarProfesor
};
