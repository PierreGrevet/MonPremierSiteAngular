import { MonPremierSitePage } from './app.po';

describe('mon-premier-site App', function() {
  let page: MonPremierSitePage;

  beforeEach(() => {
    page = new MonPremierSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
