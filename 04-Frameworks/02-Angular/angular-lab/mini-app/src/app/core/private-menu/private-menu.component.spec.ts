import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMenuComponent } from './private-menu.component';

describe('PrivateMenuComponent', () => {
  let component: PrivateMenuComponent;
  let fixture: ComponentFixture<PrivateMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateMenuComponent]
    });
    fixture = TestBed.createComponent(PrivateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
