import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePessoas, Person } from 'src/app/services/service-pessoas.service';

@Component({
    selector: 'app-edicao-pessoas',
    templateUrl: './edicao-pessoas.component.html',
    styleUrls: ['./edicao-pessoas.component.scss']
})
export class EdicaoPessoasComponent implements OnInit {
        person: Person = {
        nome: '',
        cep: '',
        endereco: '',
        cidade: '',
        uf: ''
    };

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly servicePessoas: ServicePessoas
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.servicePessoas.getPerson(+id).subscribe(data => {
                Object.assign(this.person,data);
            });
        }
    }

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
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.servicePessoas.updatePerson(+id, this.person).subscribe(() => {
                
                this.router.navigate(['/listagem-pessoas']);
            });
        }
    }
}
