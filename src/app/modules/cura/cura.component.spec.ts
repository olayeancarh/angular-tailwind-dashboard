import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuraComponent } from './cura.component';

describe('CuraComponent', () => {
  let component: CuraComponent;
  let fixture: ComponentFixture<CuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
