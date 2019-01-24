import { FormulaireInstance, FormulaireAttributes } from "../models/formulaire";
import { DbInterface } from "../typings/DbInterface";
import { Response } from "express";

export class FormulaireService {

    public static getAllFormulaires(db: DbInterface, res: Response) {
        db.Formulaire.findAll()
            .then((formulaires: FormulaireInstance[]) => res.status(200).json({formulaires}))
            .catch((err) => res.status(500).json({ err: ["oops", err] }));
    }

    public static addFormulaire(db: DbInterface, res: Response, formulaire: FormulaireAttributes  ) {
        db.Formulaire.create(formulaire)
            .then((newFormulaire: FormulaireInstance) => {
                return res.status(200).json(newFormulaire);
            })
            .catch((err) => res.status(500).json({ err: ["oops", err] }));
    }
}
