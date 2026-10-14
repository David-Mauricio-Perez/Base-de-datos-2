import {
  obtenerTodosLosProfesores,
  obtenerProfesorPorId,
  crearProfesor,
  actualizarProfesor,
  eliminarProfesor
} from "../services/profesor.service.js";

// Controlador para Profesores
export const getProfesores = async (req, res) => {
  try {
    const profesores = await obtenerTodosLosProfesores();
    res.status(200).json(profesores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProfesorById = async (req, res) => {
  try {
    const profesor = await obtenerProfesorPorId(req.params.id);
    if (!profesor) {
      return res.status(404).json({ error: "Profesor no encontrado" });
    }
    res.status(200).json(profesor);
  } catch (error) {
    res.status(400).json({ error: "ID inválido o error en la consulta" });
  }
};

export const postProfesor = async (req, res) => {
  try {
    const nuevoProfesor = await crearProfesor(req.body);
    res.status(201).json(nuevoProfesor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const putProfesor = async (req, res) => {
  try {
    const profesorActualizado = await actualizarProfesor(req.params.id, req.body);
    if (!profesorActualizado) {
      return res.status(404).json({ error: "Profesor no encontrado" });
    }
    res.status(200).json(profesorActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProfesor = async (req, res) => {
  try {
    const profesorEliminado = await eliminarProfesor(req.params.id);
    if (!profesorEliminado) {
      return res.status(404).json({ error: "Profesor no encontrado" });
    }
    res.status(200).json({ mensaje: "Profesor eliminado con éxito", profesor: profesorEliminado });
  } catch (error) {
    res.status(400).json({ error: "ID inválido o error al eliminar" });
  }
};

export default {
  getProfesores,
  getProfesorById,
  postProfesor,
  putProfesor,
  deleteProfesor
};
