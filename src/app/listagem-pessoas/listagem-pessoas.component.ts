import { Component, OnInit } from '@angular/core';
import { ServicePessoas, Person } from 'src/app/services/service-pessoas.service';

@Component({
    selector: 'app-listagem-pessoas',
    templateUrl: './listagem-pessoas.component.html',
    styleUrls: ['./listagem-pessoas.component.scss']
})
export class ListagemPessoasComponent implements OnInit {
    people: Person[] = [];

    constructor(private readonly servicePessoas: ServicePessoas) {}

    ngOnInit() {
        this.servicePessoas.getPeople().subscribe(data => {
            this.people = data;
        });
    }

    editPerson(id: number) {   
}

    deletePerson(id: number) {
        if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
            this.servicePessoas.deletePerson(id).subscribe(() => {
                this.people = this.people.filter(person => person.id !== id);
            });
        }
    }
}
