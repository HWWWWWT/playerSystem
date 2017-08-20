import { BasketballPage } from './app.po';

describe('basketball App', () => {
  let page: BasketballPage;

  beforeEach(() => {
    page = new BasketballPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
