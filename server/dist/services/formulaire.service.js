"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormulaireService {
    static getAllFormulaires(db, res) {
        db.Formulaire.findAll()
            .then((formulaires) => res.status(200).json({ formulaires }))
            .catch((err) => res.status(500).json({ err: ["oops", err] }));
    }
    static addFormulaire(db, res, formulaire) {
        db.Formulaire.create(formulaire)
            .then((newFormulaire) => {
            return res.status(200).json(newFormulaire);
        })
            .catch((err) => res.status(500).json({ err: ["oops", err] }));
    }
}
exports.FormulaireService = FormulaireService;
//# sourceMappingURL=formulaire.service.js.map