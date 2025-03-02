import { Component } from '@angular/core';
import { ServicePessoas, Person } from 'src/app/services/service-pessoas.service';

@Component({
    selector: 'app-cadastro-pessoas',
    templateUrl: './cadastro-pessoas.component.html',
    styleUrls: ['./cadastro-pessoas.component.scss']
})
export class CadastroPessoasComponent {
        person: Person = {
        nome: '',
        cep: '',
        endereco: '',
        cidade: '',
        uf: ''
    };

    constructor(private readonly servicePessoas: ServicePessoas) {}

    fetchAddress() {
        if (this.person.cep) {
            this.servicePessoas.fetchAddress(this.person.cep).subscribe(data => {
                this.person.endereco = `${data.logradouro}, ${data.bairro}`;
                this.person.cidade = data.localidade;
                this.person.uf = data.uf;
            });
        }
    }

    onSubmit() {
        this.servicePessoas.addPerson(this.person).subscribe(() => {
            
        });
    }
}
