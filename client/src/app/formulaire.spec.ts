import { Formulaire } from './formulaire';

describe('Formulaire', () => {
  it('should create an instance', () => {
    expect(new Formulaire()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const formulaire = new Formulaire({
      firstname: 'jean',
      lastname: 'test',
      address: 'route des vins',
      postal_code: '06600',
      city: 'antibes',
      phone_number: '+3303030303',
      comment: 'Ceci est un commentaire',
      email: 'mail@test.com'
    });
    expect(formulaire.firstname).toEqual('jean');
    expect(formulaire.lastname).toEqual('test');
    expect(formulaire.address).toEqual('route des vins');
    expect(formulaire.postal_code).toEqual('06600');
    expect(formulaire.city).toEqual('antibes');
    expect(formulaire.phone_number).toEqual('+3303030303');
    expect(formulaire.comment).toEqual('Ceci est un commentaire');
    expect(formulaire.email).toEqual('mail@test.com');
  });
});


