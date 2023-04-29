import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesVoituresComponent } from './listes-voitures.component';

describe('ListesVoituresComponent', () => {
  let component: ListesVoituresComponent;
  let fixture: ComponentFixture<ListesVoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesVoituresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
