export class TriviaQuestion {
  public order: number;
  public question: string;
  public answer: string;
  public extra?: any;
  public pointValue?: number;
  public tags?: string[];
}

export class TriviaRound {
  public round: number;
  public name: string;
  public description: string;
  public questions: TriviaQuestion[];
  public tags?: string[];
}

export class TriviaNight {
  public name: string;
  public description: string;
  public theme?: string;
  public tags?: string[];
}
