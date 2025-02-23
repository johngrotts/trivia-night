import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaNightComponent } from './trivia-night.component';

describe('TriviaNightComponent', () => {
  let component: TriviaNightComponent;
  let fixture: ComponentFixture<TriviaNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriviaNightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriviaNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
