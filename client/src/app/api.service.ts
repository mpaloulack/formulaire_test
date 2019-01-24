import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Formulaire } from './formulaire';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllFormulaires() {
    return this.http
      .get<Formulaire[]>(`${this.API_URL}/formulaires`);
  }

  public addFormulaire(formulaire: Formulaire) {
    return this.http
      .post<Formulaire>(`${this.API_URL}/formulaires`, formulaire);
  }
}
