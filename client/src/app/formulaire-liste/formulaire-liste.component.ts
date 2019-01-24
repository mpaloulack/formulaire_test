import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ApiService } from '../api.service';
import { Formulaire } from '../formulaire';
import 'rxjs/add/operator/map';

const ELEMENT_DATA: Formulaire[] = [
  {
    'id': 3,
    'firstname': 'maxime',
    'lastname': 'palou',
    'address': 'ceci est un test',
    'postal_code': 6000,
    'city': 'antibes',
    'phone_number': '0606060606',
    'comment': '000000',
    'email': 'mpaloulack@gmail.com',
    'createdAt': '2019-01-24T20:59:49.000Z',
    'updatedAt': '2019-01-24T20:59:49.000Z'
  },
  {
    'id': 35,
    'firstname': 'test',
    'lastname': 'blibli',
    'address': 'address',
    'postal_code': 6600,
    'city': 'test',
    'phone_number': 'test',
    'comment': 'test',
    'email': 'test',
    'createdAt': '2019-01-24T21:24:03.000Z',
    'updatedAt': '2019-01-24T21:24:03.000Z'
  }
];

@Component({
  selector: 'app-formulaire-liste',
  templateUrl: './formulaire-liste.component.html',
  styleUrls: ['./formulaire-liste.component.css']
})
export class FormulaireListeComponent {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // public dataSource = new MatTableDataSource<Formulaire>(ELEMENT_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns: string[] = ['firstname', 'lastname', 'address', 'postal_code', 'city', 'phone_number', 'comment', 'email'];
  displayedColumns: string[] = ['firstname', 'lastname'];
  dataSource: any;

  constructor(private apiService: ApiService) { }



  public getAllFormulaire() {
    console.log('getAllFormulaire');

    this.apiService.getAllFormulaires()
      .subscribe((res: any) => {
        console.log('res', res);
        this.dataSource = new MatTableDataSource<Formulaire>(res.formulaires);
        // this.dataSource.data = res.formulaires as Formulaire[];
        console.log('this.dataSource.data', this.dataSource.data);

      },
        error => {
          console.log('There was an error while retrieving Posts !!!' + error);
        });
  }
}
