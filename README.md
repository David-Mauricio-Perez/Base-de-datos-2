# Base de Datos 2 - Proyecto Drivers y API MongoDB

Este repositorio contiene los proyectos y ejercicios prácticos de la asignatura Base de Datos 2, enfocados en el uso de MongoDB con Node.js, tanto a través del Driver Nativo como con ODM (Mongoose) y arquitectura de servicios REST.

---

## 📂 Contenido del Repositorio

1. **Driver Nativo de MongoDB (`/`)**
   - Implementación directa con el driver oficial `mongodb` de Node.js.
   - Demostración de operaciones CRUD completas (`insertOne`, `insertMany`, `find`, `findOne`, `updateOne`, `updateMany`, `deleteOne`, `deleteMany`).
   - Archivo principal: `index.js`.

2. **API REST Gestión Académica (`/api-cursos`)**
   - API REST estructurada por capas (Modelos, Servicios, Controladores, Rutas y Endpoints).
   - Desarrollada con **Express** y **Mongoose**.
   - Módulos para gestión de **Cursos**, **Estudiantes** y **Profesores**.
   - Validaciones, esquemas y pruebas automatizadas con Newman / Postman.

3. **Pruebas y Colecciones Postman (`/postman`, `postman_collection.json`)**
   - Colección de Postman con casos de prueba para cada endpoint.
   - Archivo `pruebas.http` para pruebas directas en extensiones REST Client.

---

## 🚀 Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18+ recomendada)
- [pnpm](https://pnpm.io/) o [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) en ejecución local (`localhost:27017`) o MongoDB Atlas.

---

## 🛠️ Instalación y Configuración

### 1. Variables de entorno

Copia los archivos de ejemplo en cada módulo:
```bash
# En la raíz
cp .env.example .env

# En api-cursos
cp api-cursos/.env.example api-cursos/.env
```

### 2. Ejecutar Driver Nativo (Raíz)
```bash
pnpm install
pnpm start
```

### 3. Ejecutar API REST (`api-cursos`)
```bash
cd api-cursos
pnpm install
pnpm dev
```

La API quedará disponible por defecto en `http://localhost:3000`.

---

## 🌿 Estructura de Ramas

- `main`: Código estable y listo para producción.
- `dev`: Rama de desarrollo e integración continua.
