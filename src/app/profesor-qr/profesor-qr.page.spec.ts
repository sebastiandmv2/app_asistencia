import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorQrPage } from './profesor-qr.page';

describe('ProfesorQrPage', () => {
  let component: ProfesorQrPage;
  let fixture: ComponentFixture<ProfesorQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfesorQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
