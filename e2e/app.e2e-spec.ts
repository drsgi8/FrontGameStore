import { GameStorePage } from './app.po';

describe('game-store App', () => {
  let page: GameStorePage;

  beforeEach(() => {
    page = new GameStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
