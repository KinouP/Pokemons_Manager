import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreDeTachesComponent } from './barre-de-taches.component';

describe('BarreDeTachesComponent', () => {
  let component: BarreDeTachesComponent;
  let fixture: ComponentFixture<BarreDeTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreDeTachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreDeTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
