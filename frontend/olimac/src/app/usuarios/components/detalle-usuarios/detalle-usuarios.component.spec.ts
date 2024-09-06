import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsuariosComponent } from './detalle-usuarios.component';

describe('DetalleUsuariosComponent', () => {
  let component: DetalleUsuariosComponent;
  let fixture: ComponentFixture<DetalleUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleUsuariosComponent]
    });
    fixture = TestBed.createComponent(DetalleUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
