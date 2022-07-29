class ProductListPage {
  private cartButton: string;
  private checkoutButton: string;

  constructor() {
    this.cartButton = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.checkoutButton = "[style*='display: block;'] .button-container > a";
  }

  public addToCart(): void {
    cy.get(this.cartButton).click();
  }

  public proceedToCheckout(): void {
    cy.get(this.checkoutButton).click();
  }
}

export {ProductListPage};
