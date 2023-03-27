import { Game } from './bowlingGame';

let game: Game;

describe('BowlingGameTest', () => {
  beforeEach(() => {
    game = new Game();
  });

  const rollMany = (rollsNumber: number, pins: number) => {
    for (let i = 0; i < rollsNumber; i++) game.roll(pins);
  };

  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
  };

  const rollStrike = () => {
    game.roll(10);
  };

  it('TestGutterGame', () => {
    rollMany(20, 0);

    expect(game.score()).toBe(0);
  });

  it('TestAllOnes', () => {
    rollMany(20, 1);

    expect(game.score()).toBe(20);
  });

  it('TestOneSpare', () => {
    rollSpare();
    game.roll(3);

    rollMany(17, 0);

    expect(game.score()).toBe(16);
  });

  it('TestOneStrike', () => {
    rollStrike();
    game.roll(3);
    game.roll(4);

    rollMany(16, 0);

    expect(game.score()).toBe(24);
  });

  it('TestPerfectGame', () => {
    rollMany(12, 10);

    expect(game.score()).toBe(300);
  });
});
