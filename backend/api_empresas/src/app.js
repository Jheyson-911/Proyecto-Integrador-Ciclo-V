import express from "express";
import morgan from "morgan";

// Importando rutas de empresas

import empresaRoutes from "./routes/empresa.routes";
import sectorRoutes from "./routes/sector.routes";

const app  = express();

// Configuraciones
 app.set("port", process.env.PORT || 4000);


// Middlewares
app.use(morgan("dev"));

// Routes

app.get("/", (req, res) => {
    res.send("Bienvenido al API de empresas");
    }
);

// Routes API

app.use("/api/empresas", empresaRoutes);

app.use("/api/sectores", sectorRoutes);


export default app;