import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { EdicaoPessoasComponent } from './edicao-pessoas/edicao-pessoas.component';

const routes: Routes = [
  { path: '', redirectTo: '/listagem-pessoas', pathMatch: 'full' },
  { path: 'listagem-pessoas', component: ListagemPessoasComponent },
  { path: 'cadastro-pessoas', component: CadastroPessoasComponent },
  { path: 'edicao-pessoas/:id', component: EdicaoPessoasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
