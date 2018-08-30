import { ComponentLabsPage } from './app.po';

describe('component-labs App', function() {
  let page: ComponentLabsPage;

  beforeEach(() => {
    page = new ComponentLabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
