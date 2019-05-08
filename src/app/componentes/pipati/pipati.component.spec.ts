import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipatiComponent } from './pipati.component';

describe('PipatiComponent', () => {
  let component: PipatiComponent;
  let fixture: ComponentFixture<PipatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
