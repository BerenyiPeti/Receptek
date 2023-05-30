import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptTablazatComponent } from './recept-tablazat.component';

describe('ReceptTablazatComponent', () => {
  let component: ReceptTablazatComponent;
  let fixture: ComponentFixture<ReceptTablazatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptTablazatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptTablazatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
