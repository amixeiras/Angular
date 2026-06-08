import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialViewComponent } from './partial-view.component';

describe('PartialViewComponent', () => {
  let component: PartialViewComponent;
  let fixture: ComponentFixture<PartialViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartialViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
