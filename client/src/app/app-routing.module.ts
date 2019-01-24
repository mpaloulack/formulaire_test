import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireFormsComponent } from './formulaire-forms/formulaire-forms.component';
import { FormulaireListeComponent } from './formulaire-liste/formulaire-liste.component';

const routes: Routes = [
  { path: '', redirectTo: 'formulaires-list', pathMatch: 'full' },
  { path: 'formulaires-list', component: FormulaireListeComponent },
  { path: 'formulaires-forms', component: FormulaireFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
