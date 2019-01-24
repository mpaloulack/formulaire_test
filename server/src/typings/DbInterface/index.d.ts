import * as Sequelize from 'sequelize';
import { FormulaireInstance, FormulaireAttributes } from '../../models/formulaire';

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  Formulaire: Sequelize.Model<FormulaireInstance, FormulaireAttributes>; 
}
