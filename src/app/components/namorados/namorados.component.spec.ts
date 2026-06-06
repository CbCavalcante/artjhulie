import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NamoradosComponent } from './namorados.component';

describe('NamoradosComponent', () => {
  let component: NamoradosComponent;
  let fixture: ComponentFixture<NamoradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamoradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamoradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});