import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEquiposComponent } from './listado-equipos.component';

describe('ListadoEquiposComponent', () => {
  let component: ListadoEquiposComponent;
  let fixture: ComponentFixture<ListadoEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoEquiposComponent]
    });
    fixture = TestBed.createComponent(ListadoEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
