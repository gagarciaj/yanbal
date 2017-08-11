import { YanbalPage } from './app.po';

describe('yanbal App', () => {
  let page: YanbalPage;

  beforeEach(() => {
    page = new YanbalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
