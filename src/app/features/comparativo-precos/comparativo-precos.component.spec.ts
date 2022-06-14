import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativoPrecosComponent } from './comparativo-precos.component';

describe('ComparativoPrecosComponent', () => {
  let component: ComparativoPrecosComponent;
  let fixture: ComponentFixture<ComparativoPrecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativoPrecosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativoPrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
