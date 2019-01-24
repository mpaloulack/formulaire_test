import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../typings/SequelizeAttributes";

// tslint:disable-next-line:interface-name
export interface FormulaireAttributes {
    id?: number;
    firstname: string;
    lastname: string;
    address: string;
    postal_code: number;
    city: string;
    phone_number: string;
    comment: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}

// tslint:disable-next-line:interface-name
export interface FormulaireInstance extends Sequelize.Instance<FormulaireAttributes>, FormulaireAttributes { }

export const FormulaireFactory = (
    sequelize: Sequelize.Sequelize,
    DataTypes: Sequelize.DataTypes): Sequelize.Model<FormulaireInstance, FormulaireAttributes> => {
    const attributes: SequelizeAttributes<FormulaireAttributes> = {
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

    const Formulaire = sequelize.define<FormulaireInstance, FormulaireAttributes>("Formulaire", attributes);

    return Formulaire;
};
