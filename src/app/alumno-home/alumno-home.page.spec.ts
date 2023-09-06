import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoHomePage } from './alumno-home.page';

describe('AlumnoHomePage', () => {
  let component: AlumnoHomePage;
  let fixture: ComponentFixture<AlumnoHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnoHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
