import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { EdicaoPessoasComponent } from './edicao-pessoas/edicao-pessoas.component';
import { ServicePessoas } from 'src/app/services/service-pessoas.service';
import { AppRoutingModule } from './app-routing.module'; 
@NgModule({
  declarations: [
    AppComponent,
    ListagemPessoasComponent,
    CadastroPessoasComponent,
    EdicaoPessoasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule 
  ],
  providers: [ServicePessoas],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
