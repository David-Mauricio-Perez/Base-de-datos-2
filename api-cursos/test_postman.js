const BASE_URL = "http://localhost:3000";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function ejecutarPruebas() {
  console.log("=================================================");
  console.log("🚀 EJECUTANDO BATERÍA DE PRUEBAS TIPO POSTMAN 🚀");
  console.log("=================================================\n");

  try {
    // 0. Info API
    console.log("▶ [TEST 0] GET / (Info API)");
    const resInfo = await fetch(`${BASE_URL}/`);
    const dataInfo = await resInfo.json();
    console.log(`  Status: ${resInfo.status} OK`);
    console.log(`  Respuesta: ${JSON.stringify(dataInfo)}\n`);

    // ==========================================
    // 1. PRUEBAS: CURSOS
    // ==========================================
    console.log("-------------------------------------------------");
    console.log("📚 1. RECURSO: CURSOS");
    console.log("-------------------------------------------------");

    // 1.1 POST /cursos
    console.log("▶ [TEST 1.1] POST /cursos (Crear Curso)");
    const codigoUnico = `BD-${Date.now()}`;
    const cursoBody = {
      codigo: codigoUnico,
      nombre: "Bases de Datos 2",
      creditos: 3,
      profesor: "Jhon Mendez",
      estado: true
    };
    const resPostCurso = await fetch(`${BASE_URL}/cursos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cursoBody)
    });
    const cursoCreado = await resPostCurso.json();
    console.log(`  Status: ${resPostCurso.status} (Esperado: 201)`);
    console.log(`  Creado: ID=${cursoCreado._id}, Codigo=${cursoCreado.codigo}, Nombre=${cursoCreado.nombre}`);
    const cursoId = cursoCreado._id;

    // 1.2 GET /cursos
    console.log("\n▶ [TEST 1.2] GET /cursos (Listar Todos)");
    const resGetCursos = await fetch(`${BASE_URL}/cursos`);
    const cursos = await resGetCursos.json();
    console.log(`  Status: ${resGetCursos.status} (Esperado: 200)`);
    console.log(`  Total cursos en BD: ${cursos.length}`);

    // 1.3 GET /cursos/:id
    console.log(`\n▶ [TEST 1.3] GET /cursos/${cursoId} (Consultar por ID)`);
    const resGetCursoId = await fetch(`${BASE_URL}/cursos/${cursoId}`);
    const cursoObtenido = await resGetCursoId.json();
    console.log(`  Status: ${resGetCursoId.status} (Esperado: 200)`);
    console.log(`  Curso encontrado: ${cursoObtenido.nombre} - Profesor: ${cursoObtenido.profesor}`);

    // 1.4 PUT /cursos/:id
    console.log(`\n▶ [TEST 1.4] PUT /cursos/${cursoId} (Actualizar Curso)`);
    const resPutCurso = await fetch(`${BASE_URL}/cursos/${cursoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ creditos: 4, nombre: "Bases de Datos Avanzadas" })
    });
    const cursoActualizado = await resPutCurso.json();
    console.log(`  Status: ${resPutCurso.status} (Esperado: 200)`);
    console.log(`  Datos actualizados: Nombre="${cursoActualizado.nombre}", Créditos=${cursoActualizado.creditos}`);

    // 1.5 DELETE /cursos/:id
    console.log(`\n▶ [TEST 1.5] DELETE /cursos/${cursoId} (Eliminar Curso)`);
    const resDelCurso = await fetch(`${BASE_URL}/cursos/${cursoId}`, { method: "DELETE" });
    const cursoBorrado = await resDelCurso.json();
    console.log(`  Status: ${resDelCurso.status} (Esperado: 200)`);
    console.log(`  Respuesta: ${cursoBorrado.mensaje}`);


    // ==========================================
    // 2. PRUEBAS: ESTUDIANTES
    // ==========================================
    console.log("\n-------------------------------------------------");
    console.log("👨‍🎓 2. RECURSO: ESTUDIANTES");
    console.log("-------------------------------------------------");

    // 2.1 POST /estudiantes
    console.log("▶ [TEST 2.1] POST /estudiantes (Crear Estudiante)");
    const emailEstudiante = `estudiante_${Date.now()}@mail.com`;
    const resPostEst = await fetch(`${BASE_URL}/estudiantes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: "Laura Morales",
        edad: 21,
        email: emailEstudiante,
        activo: true
      })
    });
    const estCreado = await resPostEst.json();
    console.log(`  Status: ${resPostEst.status} (Esperado: 201)`);
    console.log(`  Creado: ID=${estCreado._id}, Nombre=${estCreado.nombre}, Email=${estCreado.email}`);
    const estId = estCreado._id;

    // 2.2 GET /estudiantes
    console.log("\n▶ [TEST 2.2] GET /estudiantes (Listar Todos)");
    const resGetEst = await fetch(`${BASE_URL}/estudiantes`);
    const estudiantes = await resGetEst.json();
    console.log(`  Status: ${resGetEst.status} (Esperado: 200)`);
    console.log(`  Total estudiantes en BD: ${estudiantes.length}`);

    // 2.3 GET /estudiantes/:id
    console.log(`\n▶ [TEST 2.3] GET /estudiantes/${estId} (Consultar por ID)`);
    const resGetEstId = await fetch(`${BASE_URL}/estudiantes/${estId}`);
    const estObtenido = await resGetEstId.json();
    console.log(`  Status: ${resGetEstId.status} (Esperado: 200)`);
    console.log(`  Estudiante encontrado: ${estObtenido.nombre}, Edad: ${estObtenido.edad}`);

    // 2.4 PUT /estudiantes/:id
    console.log(`\n▶ [TEST 2.4] PUT /estudiantes/${estId} (Actualizar Estudiante)`);
    const resPutEst = await fetch(`${BASE_URL}/estudiantes/${estId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ edad: 22 })
    });
    const estActualizado = await resPutEst.json();
    console.log(`  Status: ${resPutEst.status} (Esperado: 200)`);
    console.log(`  Datos actualizados: Edad=${estActualizado.edad}`);

    // 2.5 DELETE /estudiantes/:id
    console.log(`\n▶ [TEST 2.5] DELETE /estudiantes/${estId} (Eliminar Estudiante)`);
    const resDelEst = await fetch(`${BASE_URL}/estudiantes/${estId}`, { method: "DELETE" });
    const estBorrado = await resDelEst.json();
    console.log(`  Status: ${resDelEst.status} (Esperado: 200)`);
    console.log(`  Respuesta: ${estBorrado.mensaje}`);


    // ==========================================
    // 3. PRUEBAS: PROFESORES
    // ==========================================
    console.log("\n-------------------------------------------------");
    console.log("👨‍🏫 3. RECURSO: PROFESORES");
    console.log("-------------------------------------------------");

    // 3.1 POST /profesores
    console.log("▶ [TEST 3.1] POST /profesores (Crear Profesor)");
    const emailProfesor = `profesor_${Date.now()}@universidad.edu.co`;
    const resPostProf = await fetch(`${BASE_URL}/profesores`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: "Jhon Mendez",
        email: emailProfesor,
        departamento: "Sistemas y Computación",
        activo: true
      })
    });
    const profCreado = await resPostProf.json();
    console.log(`  Status: ${resPostProf.status} (Esperado: 201)`);
    console.log(`  Creado: ID=${profCreado._id}, Nombre=${profCreado.nombre}, Depto=${profCreado.departamento}`);
    const profId = profCreado._id;

    // 3.2 GET /profesores
    console.log("\n▶ [TEST 3.2] GET /profesores (Listar Todos)");
    const resGetProf = await fetch(`${BASE_URL}/profesores`);
    const profesores = await resGetProf.json();
    console.log(`  Status: ${resGetProf.status} (Esperado: 200)`);
    console.log(`  Total profesores en BD: ${profesores.length}`);

    // 3.3 GET /profesores/:id
    console.log(`\n▶ [TEST 3.3] GET /profesores/${profId} (Consultar por ID)`);
    const resGetProfId = await fetch(`${BASE_URL}/profesores/${profId}`);
    const profObtenido = await resGetProfId.json();
    console.log(`  Status: ${resGetProfId.status} (Esperado: 200)`);
    console.log(`  Profesor encontrado: ${profObtenido.nombre} - Depto: ${profObtenido.departamento}`);

    // 3.4 PUT /profesores/:id
    console.log(`\n▶ [TEST 3.4] PUT /profesores/${profId} (Actualizar Profesor)`);
    const resPutProf = await fetch(`${BASE_URL}/profesores/${profId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ departamento: "Inteligencia Artificial y Bases de Datos" })
    });
    const profActualizado = await resPutProf.json();
    console.log(`  Status: ${resPutProf.status} (Esperado: 200)`);
    console.log(`  Datos actualizados: Depto="${profActualizado.departamento}"`);

    // 3.5 DELETE /profesores/:id
    console.log(`\n▶ [TEST 3.5] DELETE /profesores/${profId} (Eliminar Profesor)`);
    const resDelProf = await fetch(`${BASE_URL}/profesores/${profId}`, { method: "DELETE" });
    const profBorrado = await resDelProf.json();
    console.log(`  Status: ${resDelProf.status} (Esperado: 200)`);
    console.log(`  Respuesta: ${profBorrado.mensaje}`);

    console.log("\n=================================================");
    console.log("🎉 ¡TODAS LAS PRUEBAS COMPLETADAS CON ÉXITO! 🎉");
    console.log("=================================================");
  } catch (error) {
    console.error("❌ Error durante la ejecución de pruebas:", error);
  }
}

ejecutarPruebas();
