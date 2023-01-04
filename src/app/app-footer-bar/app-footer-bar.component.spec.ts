import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterBarComponent } from './app-footer-bar.component';

describe('AppFooterBarComponent', () => {
  let component: AppFooterBarComponent;
  let fixture: ComponentFixture<AppFooterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFooterBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
