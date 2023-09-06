import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoQrPage } from './alumno-qr.page';

describe('AlumnoQrPage', () => {
  let component: AlumnoQrPage;
  let fixture: ComponentFixture<AlumnoQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnoQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
