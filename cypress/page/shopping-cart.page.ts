class ShoppingCartPage {
  private checkoutButton: string;

  constructor() {
    this.checkoutButton = ".cart_navigation span";
  }

  public proceedToCheckout(): void {
    cy.get(this.checkoutButton).click();
  }
}

export {ShoppingCartPage};
