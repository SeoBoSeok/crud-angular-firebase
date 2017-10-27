import { CrudFirebasePage } from './app.po';

describe('crud-firebase App', () => {
  let page: CrudFirebasePage;

  beforeEach(() => {
    page = new CrudFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
