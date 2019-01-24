export class Formulaire {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    postal_code: number;
    city: string;
    phone_number: string;
    comment: string;
    email: string;
    createdAt: string;
    updatedAt: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
