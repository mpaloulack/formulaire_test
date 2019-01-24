"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelizeConfig = require("./config/sequelizeConfig.json");
const models_1 = require("./models");
const formulaire_service_1 = require("./services/formulaire.service");
const app = express();
const port = 4001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const db = models_1.createModels(sequelizeConfig);
db.sequelize.sync();
app.get("/api/formulaires", (req, res, next) => {
    formulaire_service_1.FormulaireService.getAllFormulaires(db, res);
});
app.post("/api/formulaires", (req, res, next) => {
    formulaire_service_1.FormulaireService.addFormulaire(db, res, req.body);
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`App is listening on port ${port}`);
});
//# sourceMappingURL=server.js.map