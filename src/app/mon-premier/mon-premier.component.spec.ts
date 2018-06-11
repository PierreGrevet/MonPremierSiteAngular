/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonPremierComponent } from './mon-premier.component';

describe('MonPremierComponent', () => {
  let component: MonPremierComponent;
  let fixture: ComponentFixture<MonPremierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPremierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});