import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgflowComponent } from './ngflow.component';

describe('NgflowComponent', () => {
  let component: NgflowComponent;
  let fixture: ComponentFixture<NgflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgflowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
