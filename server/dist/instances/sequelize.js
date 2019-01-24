"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db = 'youdome_test';
const username = 'root';
const password = 'root';
exports.sequelize = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});
exports.sequelize.authenticate();
//# sourceMappingURL=sequelize.js.map