import { MychatbotPage } from './app.po';

describe('mychatbot App', function() {
  let page: MychatbotPage;

  beforeEach(() => {
    page = new MychatbotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
