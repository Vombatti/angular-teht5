import { AngularTeht5Page } from './app.po';

describe('angular-teht5 App', function() {
  let page: AngularTeht5Page;

  beforeEach(() => {
    page = new AngularTeht5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
