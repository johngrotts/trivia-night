import { Injectable } from '@angular/core';
import { TriviaGame } from '../models/trivia-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private _currentQuestion: number;
  private _currentRound: number;
  private _game: TriviaGame;

  constructor() { }

  public get currentQuestion(): number {
    return this._currentQuestion;
  }
  public set currentQuestion(currentQuestion: number) {
    this._currentQuestion = currentQuestion;
  }
  public get currentRound(): number {
    return this._currentRound;
  }
  public set currentRound(currentRound: number) {
    this._currentRound = currentRound;
  }
  public get game(): TriviaGame {
    return this._game;
  }
  public set game(game: TriviaGame) {
    this._game = game;
  }
  
}
