import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarJuegoComponent } from './modificar-juego.component';

describe('ModificarJuegoComponent', () => {
  let component: ModificarJuegoComponent;
  let fixture: ComponentFixture<ModificarJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarJuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
