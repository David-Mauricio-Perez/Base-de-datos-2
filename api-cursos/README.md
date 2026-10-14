# API REST de Gestión Académica (Cursos, Estudiantes y Profesores)

API REST desarrollada con **Node.js**, **Express**, **MongoDB** y **Mongoose**, estructurada con la **arquitectura en capas por separación de responsabilidades** (modelos, servicios, controladores, rutas y endpoints) según las diapositivas 39 y 40 de la guía.

---

## 📁 Estructura del Proyecto

Existe un **único `index.js`** en todo el proyecto, ubicado estratégicamente en `src/routes/index.js`, conectando las **rutas** específicas con los **endpoints** públicos de la API:

```text
api-cursos/
│-- src/
│   │-- config/
│   │   └── database.js               # Conexión centralizada a MongoDB con Mongoose (Slide 26)
│   │
│   │-- models/                       # 1. MODELOS: Schemas y validaciones de Mongoose
│   │   ├── curso.model.js            # Modelo Curso (Slide 54)
│   │   ├── estudiante.model.js       # Modelo Estudiante (Slide 27)
│   │   └── profesor.model.js         # Modelo Profesor
│   │
│   │-- services/                     # 2. SERVICIOS: Consultas y operaciones a la BD
│   │   ├── curso.service.js          # Operaciones Mongoose para Cursos
│   │   ├── estudiante.service.js     # Operaciones Mongoose para Estudiantes
│   │   └── profesor.service.js       # Operaciones Mongoose para Profesores
│   │
│   │-- controllers/                  # 3. CONTROLADORES: Manejo de Request y Response HTTP
│   │   ├── curso.controller.js       # Controladores HTTP de Cursos
│   │   ├── estudiante.controller.js  # Controladores HTTP de Estudiantes
│   │   └── profesor.controller.js    # Controladores HTTP de Profesores
│   │
│   └── routes/                       # 4. RUTAS Y ENDPOINTS
│       ├── curso.routes.js           # Rutas específicas para cursos
│       ├── estudiante.routes.js      # Rutas específicas para estudiantes
│       ├── profesor.routes.js        # Rutas específicas para profesores
│       └── index.js                  # ÚNICO INDEX: Conecta las rutas con los endpoints
│
│-- app.js                            # Instancia de Express, middlewares y montaje de rutas (Slide 40)
│-- server.js                         # Inicio del servidor HTTP y conexión a BD (Slide 41-42)
│-- .env                              # Variables de entorno (MONGODB_URI, PORT)
│-- .gitignore                        # Ignora node_modules/ y .env
│-- package.json                      # Configuración de dependencias y scripts de pnpm
│-- pruebas.http                      # Pruebas HTTP completas listas para VS Code
└── README.md                         # Documentación del proyecto
```

---

## 🔄 Flujo de una Petición

```text
Cliente (Petición HTTP)
   ↓
Endpoint (/cursos, /estudiantes, /profesores)
   ↓
index.js (src/routes/index.js - Enrutador central)
   ↓
Ruta (*.routes.js - Define los verbos GET, POST, PUT, DELETE)
   ↓
Controlador (*.controller.js - Extrae req.params, req.body y responde con res)
   ↓
Servicio (*.service.js - Lógica de negocio y consultas Mongoose)
   ↓
Modelo (*.model.js - Esquema y validaciones Mongoose)
   ↓
MongoDB
```

---

## 🌐 Endpoints Disponibles

### 1. Cursos (`/cursos` o `/api/cursos`)
| Método | Endpoint | Acción |
| :--- | :--- | :--- |
| `GET` | `/cursos` | Obtener todos los cursos |
| `GET` | `/cursos/:id` | Obtener curso por ID |
| `POST` | `/cursos` | Crear nuevo curso (`codigo`, `nombre`, `creditos`, `profesor`, `estado`) |
| `PUT` | `/cursos/:id` | Actualizar curso por ID |
| `DELETE` | `/cursos/:id` | Eliminar curso por ID |

### 2. Estudiantes (`/estudiantes` o `/api/estudiantes`)
| Método | Endpoint | Acción |
| :--- | :--- | :--- |
| `GET` | `/estudiantes` | Obtener todos los estudiantes |
| `GET` | `/estudiantes/:id` | Obtener estudiante por ID |
| `POST` | `/estudiantes` | Crear nuevo estudiante (`nombre`, `edad`, `email`, `activo`) |
| `PUT` | `/estudiantes/:id` | Actualizar estudiante por ID |
| `DELETE` | `/estudiantes/:id` | Eliminar estudiante por ID |

### 3. Profesores (`/profesores` o `/api/profesores`)
| Método | Endpoint | Acción |
| :--- | :--- | :--- |
| `GET` | `/profesores` | Obtener todos los profesores |
| `GET` | `/profesores/:id` | Obtener profesor por ID |
| `POST` | `/profesores` | Crear nuevo profesor (`nombre`, `email`, `departamento`, `activo`) |
| `PUT` | `/profesores/:id` | Actualizar profesor por ID |
| `DELETE` | `/profesores/:id` | Eliminar profesor por ID |

---

## 🚀 Cómo Ejecutar

```bash
cd api-cursos
pnpm dev
# o también:
pnpm start
```
