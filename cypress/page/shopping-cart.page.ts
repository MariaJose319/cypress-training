class ShoppingCartPage {
  private checkoutButton: string;

  constructor() {
    this.checkoutButton = ".cart_navigation >[title='Proceed to checkout']";
  }

  public proceedToCheckout(): void {
    cy.get(this.checkoutButton).click();
  }
}

export {ShoppingCartPage};
