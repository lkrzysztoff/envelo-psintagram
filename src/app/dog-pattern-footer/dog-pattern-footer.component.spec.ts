import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPatternFooterComponent } from './dog-pattern-footer.component';

describe('DogPatternFooterComponent', () => {
  let component: DogPatternFooterComponent;
  let fixture: ComponentFixture<DogPatternFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogPatternFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogPatternFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
