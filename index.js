import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware para parsear el body del request como JSON
app.use(bodyParser.json());
app.use(cors());

// Estructura predefinida
const form = {
    name: "",
    location: "",
    email: "",
    age: "",
    family: "",
    ageWife: "",
    ageSons: [""],
    affiliationWife: "",
    salaryWife: "",
    categoryMonotributeWife: "",
    affiliation: "",
    salary: "",
    categoryMonotribute: ""
}

// Función para verificar y mapear los datos recibidos a la estructura predefinida
const mapearDatos = (data) => {
    for (const key in data) {
        // Verificar si la clave existe en la estructura predefinida
        if (key in form) {
            if (Array.isArray(data[key])) {
                form[key] = data[key];
              } else {
                // Asignar el valor al campo correspondiente en la estructura predefinida
                form[key] = data[key];
              }
        }
    }
};

// Endpoint para manejar el formulario JSON
app.post('/cotizacion', (req, res) => {
    const data = req.body;

    // Verificar si todos los parámetros requeridos están presentes en el formulario
    for (const key in form) {
        if (!(key in data)) {
            return res.status(400).json({ error: `Falta el parámetro ${key} en el formulario` });
        }
    }

    // Mapear los datos recibidos a la estructura predefinida
    /*
    mapearDatos(data);
    console.log("Form Data:",form)
    // Responder con la estructura predefinida actualizada
    */
    const cotizaciones = {
        cotizacion1: 3000,
        cotizacion2: 4000,
        cotizacion3: 5000,
        cotizacion4: 6000,
        
    };
    res.status(201).json(cotizaciones);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});