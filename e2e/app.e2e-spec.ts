import { BsaHw08Page } from './app.po';

describe('bsa-hw08 App', () => {
  let page: BsaHw08Page;

  beforeEach(() => {
    page = new BsaHw08Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
