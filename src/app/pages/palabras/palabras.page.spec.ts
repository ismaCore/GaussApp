import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabrasPage } from './palabras.page';

describe('PalabrasPage', () => {
  let component: PalabrasPage;
  let fixture: ComponentFixture<PalabrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalabrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
