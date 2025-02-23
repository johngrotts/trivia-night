import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaRoundComponent } from './trivia-round.component';

describe('TriviaRoundComponent', () => {
  let component: TriviaRoundComponent;
  let fixture: ComponentFixture<TriviaRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriviaRoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriviaRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
