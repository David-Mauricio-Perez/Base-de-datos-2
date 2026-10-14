import {
  obtenerTodosLosEstudiantes,
  obtenerEstudiantePorId,
  crearEstudiante,
  actualizarEstudiante,
  eliminarEstudiante
} from "../services/estudiante.service.js";

// Controlador para Estudiantes
export const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await obtenerTodosLosEstudiantes();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEstudianteById = async (req, res) => {
  try {
    const estudiante = await obtenerEstudiantePorId(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }
    res.status(200).json(estudiante);
  } catch (error) {
    res.status(400).json({ error: "ID inválido o error en la consulta" });
  }
};

export const postEstudiante = async (req, res) => {
  try {
    const nuevoEstudiante = await crearEstudiante(req.body);
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const putEstudiante = async (req, res) => {
  try {
    const estudianteActualizado = await actualizarEstudiante(req.params.id, req.body);
    if (!estudianteActualizado) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }
    res.status(200).json(estudianteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEstudiante = async (req, res) => {
  try {
    const estudianteEliminado = await eliminarEstudiante(req.params.id);
    if (!estudianteEliminado) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }
    res.status(200).json({ mensaje: "Estudiante eliminado con éxito", estudiante: estudianteEliminado });
  } catch (error) {
    res.status(400).json({ error: "ID inválido o error al eliminar" });
  }
};

export default {
  getEstudiantes,
  getEstudianteById,
  postEstudiante,
  putEstudiante,
  deleteEstudiante
};
