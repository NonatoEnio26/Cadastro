import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPessoasComponent } from './edicao-pessoas.component';

describe('EdicaoPessoasComponent', () => {
  let component: EdicaoPessoasComponent;
  let fixture: ComponentFixture<EdicaoPessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoPessoasComponent]
    });
    fixture = TestBed.createComponent(EdicaoPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
