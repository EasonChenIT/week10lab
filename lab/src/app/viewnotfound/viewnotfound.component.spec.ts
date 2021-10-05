import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnotfoundComponent } from './viewnotfound.component';

describe('ViewnotfoundComponent', () => {
  let component: ViewnotfoundComponent;
  let fixture: ComponentFixture<ViewnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
