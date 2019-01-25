import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ApiService } from '../api.service';
import { Formulaire } from '../formulaire';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-formulaire-liste',
  templateUrl: './formulaire-liste.component.html',
  styleUrls: ['./formulaire-liste.component.css']
})
export class FormulaireListeComponent implements OnInit{

  displayedColumns: string[] = ['firstname', 'lastname', 'address', 'postal_code', 'city', 'phone_number', 'comment', 'email'];
  formulaires: Formulaire[] = [];
  dataSource = new MatTableDataSource(this.formulaires);
  test: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllFormulaire();
  }

  public getAllFormulaire() {
    console.log('getAllFormulaire');

    this.apiService.getAllFormulaires()
      .subscribe((res: any) => {
        this.formulaires = res.formulaires;
        this.dataSource.data = this.formulaires;
        this.test = this.dataSource.data.length;
      },
        error => {
          console.log('There was an error while retrieving Posts !!!' + error);
        });
  }
}
