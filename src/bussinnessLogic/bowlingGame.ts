export class Game {
  private _rolls: number[] = [];
  private _currentRool: number = 0;

  public roll(pins: number): void {
    this._rolls[this._currentRool++] = pins;
  }

  public score(): number {
    let totalScore = 0;

    let frameIndex: number = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        totalScore += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else if (this.isStrike(frameIndex)) {
        totalScore += 10 + this.strikeBonus(frameIndex);
        frameIndex += 1;
      } else {
        totalScore += this.sumBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return totalScore;
  }

  private isSpare(frameIndex: number): boolean {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
  }

  private isStrike(frameIndex: number): boolean {
    return this._rolls[frameIndex] === 10;
  }

  private spareBonus(frameIndex: number): number {
    return this._rolls[frameIndex + 2];
  }

  private strikeBonus(frameIndex: number): number {
    return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
  }

  private sumBallsInFrame(frameIndex: number): number {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
  }
}
