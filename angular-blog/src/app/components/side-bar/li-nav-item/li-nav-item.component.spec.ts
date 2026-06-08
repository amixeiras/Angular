import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiNavItemComponent } from './li-nav-item.component';

describe('LiNavItemComponent', () => {
  let component: LiNavItemComponent;
  let fixture: ComponentFixture<LiNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiNavItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
