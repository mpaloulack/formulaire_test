import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as sequelizeConfig from "./config/sequelizeConfig.json";
import { createModels } from "./models";
import { FormulaireService } from "./services/formulaire.service";
import * as path from "path";

const app = express();
const port = 4001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = createModels(sequelizeConfig);
db.sequelize.sync();

app.get("/api/formulaires", (req, res, next) => {
    FormulaireService.getAllFormulaires(db, res);
});

app.post("/api/formulaires", (req, res, next) => {
    FormulaireService.addFormulaire(db, res, req.body);
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`App is listening on port ${port}`);
});
