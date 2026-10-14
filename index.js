import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const urlBd = process.env.URL_BD || process.env.URI_BD || "mongodb://localhost:27017/";
const bdName = "universidad";
const collectionName = "estudiantes";

const conexion = async () => {
  let client;
  try {
    client = await MongoClient.connect(urlBd);
    console.log("✅ Conexión exitosa a MongoDB");

    const db = client.db(bdName);
    const estudiantes = db.collection(collectionName);

    console.log("\n==============================");
    console.log("   OPERACIONES CRUD (GUÍA)    ");
    console.log("==============================\n");

    // ==========================================
    // 1. CREATE: Insertar documentos (Diapositiva 13)
    // ==========================================
    console.log("--- 1. CREATE: insertOne e insertMany ---");

    // Inserción de un documento
    const resultadoUno = await estudiantes.insertOne({
      nombre: "Ana",
      edad: 20,
      programa: "Ingenieria",
      activo: true
    });
    console.log("Documento insertado (insertOne):", resultadoUno.insertedId);

    // Inserción de varios documentos
    const resultadoVarios = await estudiantes.insertMany([
      { nombre: "Carlos", edad: 22, programa: "Ingenieria", activo: true },
      { nombre: "Maria", edad: 20, programa: "Medicina", activo: false },
      { nombre: "Juan", edad: 25, programa: "Derecho", activo: true }
    ]);
    console.log("Documentos insertados (insertMany):", resultadoVarios.insertedCount);


    // ==========================================
    // 2. READ: Consultar documentos (Diapositivas 14 y 15)
    // ==========================================
    console.log("\n--- 2. READ: find y findOne ---");

    // Consultar todos con .toArray() (Diapositiva 14)
    const todos = await estudiantes.find({}).toArray();
    console.log("Todos los estudiantes registrados:", todos);

    // Consultar con filtro (edad: 20) (Diapositiva 14)
    const edad20 = await estudiantes.find({ edad: 20 }).toArray();
    console.log("Estudiantes con edad 20:", edad20);

    // Consultar un único documento con findOne (Diapositiva 15)
    const estudianteAna = await estudiantes.findOne({ nombre: "Ana" });
    console.log("Búsqueda de 'Ana' (findOne):", estudianteAna);


    // ==========================================
    // 3. UPDATE: Modificar documentos (Diapositiva 16)
    // ==========================================
    console.log("\n--- 3. UPDATE: updateOne y updateMany ---");

    // Modificar un solo documento con $set (Diapositiva 16)
    const updateUno = await estudiantes.updateOne(
      { nombre: "Ana" },
      {
        $set: {
          edad: 21
        }
      }
    );
    console.log("Documentos modificados con updateOne:", updateUno.modifiedCount);

    // Modificar varios documentos con updateMany (Diapositiva 16)
    const updateVarios = await estudiantes.updateMany(
      { programa: "Ingenieria" },
      {
        $set: {
          activo: true
        }
      }
    );
    console.log("Documentos modificados con updateMany:", updateVarios.modifiedCount);


    // ==========================================
    // 4. DELETE: Eliminar documentos (Diapositiva 17)
    // ==========================================
    console.log("\n--- 4. DELETE: deleteOne y deleteMany ---");

    // Eliminar un solo documento (Diapositiva 17)
    const deleteUno = await estudiantes.deleteOne({ nombre: "Maria" });
    console.log("Documento eliminado (deleteOne):", deleteUno.deletedCount);

    // Eliminar varios según filtro (Diapositiva 17)
    // (Por ejemplo los inactivos)
    const deleteVarios = await estudiantes.deleteMany({ activo: false });
    console.log("Documentos eliminados (deleteMany):", deleteVarios.deletedCount);

    // Ver el resultado final de la colección
    console.log("\n--- Estado final de la colección ---");
    const resultadoFinal = await estudiantes.find({}).toArray();
    console.log(resultadoFinal);

  } catch (error) {
    console.log("❌ Error de conexión u operación: ", error);
  } finally {
    if (client) {
      await client.close();
      console.log("\n🔒 Conexión cerrada correctamente.");
    }
  }
};

conexion();
