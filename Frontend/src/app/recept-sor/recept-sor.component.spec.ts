import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptSorComponent } from './recept-sor.component';

describe('ReceptSorComponent', () => {
  let component: ReceptSorComponent;
  let fixture: ComponentFixture<ReceptSorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptSorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptSorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
