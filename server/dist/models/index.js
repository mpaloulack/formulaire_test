"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const formulaire_1 = require("./formulaire");
exports.createModels = (sequelizeConfig) => {
    const { database, username, password, params } = sequelizeConfig;
    const sequelize = new Sequelize(database, username, password, params);
    const db = {
        sequelize,
        Sequelize,
        Formulaire: formulaire_1.FormulaireFactory(sequelize, Sequelize),
    };
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
//# sourceMappingURL=index.js.map