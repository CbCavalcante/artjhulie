import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreLoja } from './sobre-loja.component';

describe('SobreLoja', () => {
  let component: SobreLoja;
  let fixture: ComponentFixture<SobreLoja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreLoja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreLoja);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
