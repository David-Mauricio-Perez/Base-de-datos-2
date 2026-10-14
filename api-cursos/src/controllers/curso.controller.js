import {
  obtenerTodosLosCursos,
  obtenerCursoPorId,
  crearCurso,
  actualizarCurso,
  eliminarCurso
} from "../services/curso.service.js";

// Controlador para Cursos (Manejo de Request y Response HTTP)
export const getCursos = async (req, res) => {
  try {
    const cursos = await obtenerTodosLosCursos();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCursoById = async (req, res) => {
  try {
    const curso = await obtenerCursoPorId(req.params.id);
    if (!curso) {
      return res.status(404).json({ error: "Curso no encontrado" });
    }
    res.status(200).json(curso);
  } catch (error) {
    res.status(400).json({ error: "ID inválido o error en la consulta" });
  }
};

export const postCurso = async (req, res) => {
  try {
    const nuevoCurso = await crearCurso(req.body);
    res.status(201).json(nuevoCurso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const putCurso = async (req, res) => {
  try {
    const cursoActualizado = await actualizarCurso(req.params.id, req.body);
    if (!cursoActualizado) {
      return res.status(404).json({ error: "Curso no encontrado" });
    }
    res.status(200).json(cursoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCurso = async (req, res) => {
  try {
    const cursoEliminado = await eliminarCurso(req.params.id);
    if (!cursoEliminado) {
      return res.status(404).json({ error: "Curso no encontrado" });
    }
    res.status(200).json({ mensaje: "Curso eliminado con éxito", curso: cursoEliminado });
  } catch (error) {
    res.status(400).json({ error: "ID inválido o error al eliminar" });
  }
};

export default {
  getCursos,
  getCursoById,
  postCurso,
  putCurso,
  deleteCurso
};
