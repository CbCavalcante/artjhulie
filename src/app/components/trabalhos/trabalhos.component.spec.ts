import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trabalhos } from './trabalhos.component';

describe('Trabalhos', () => {
  let component: Trabalhos;
  let fixture: ComponentFixture<Trabalhos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trabalhos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trabalhos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
