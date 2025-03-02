import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
    id?: number;
    nome: string;
    cep: string;
    endereco: string;
    cidade: string;
    uf: string;
    ativo?: boolean;
    celular?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ServicePessoas {
    private apiUrl = 'http://localhost:3000/pessoas';

    constructor(private http: HttpClient) {}

    getPeople(): Observable<Person[]> {
        return this.http.get<Person[]>(this.apiUrl);
    }

    getPerson(id: number): Observable<Person> {
        return this.http.get<Person>(`${this.apiUrl}/${id}`);
    }

    addPerson(person: Person): Observable<Person> {
        return this.http.post<Person>(this.apiUrl, person);
    }

    updatePerson(id: number, person: Person): Observable<Person> {
        return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
    }

    deletePerson(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    fetchAddress(cep: string): Observable<any> {
        return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
    }
}
