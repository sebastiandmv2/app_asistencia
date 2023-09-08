import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaCheckPage } from './asistencia-check.page';

describe('AsistenciaCheckPage', () => {
  let component: AsistenciaCheckPage;
  let fixture: ComponentFixture<AsistenciaCheckPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistenciaCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
