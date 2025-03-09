import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaAppiComponent } from './segunda-appi.component';

describe('SegundaAppiComponent', () => {
  let component: SegundaAppiComponent;
  let fixture: ComponentFixture<SegundaAppiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundaAppiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaAppiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
