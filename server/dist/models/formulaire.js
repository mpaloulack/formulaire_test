"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaireFactory = (sequelize, DataTypes) => {
    const attributes = {
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        postal_code: {
            type: DataTypes.INTEGER
        },
        city: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.STRING(5000)
        },
        email: {
            type: DataTypes.STRING
        },
    };
    const Formulaire = sequelize.define("Formulaire", attributes);
    return Formulaire;
};
//# sourceMappingURL=formulaire.js.map