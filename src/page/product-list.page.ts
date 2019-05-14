import { $, ElementFinder } from 'protractor';

export class ProductList {
  private productListPage: ElementFinder;

  constructor () {
    this.productListPage = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToProductList(): Promise<void> {
    await this.productListPage.click();
  }
}
