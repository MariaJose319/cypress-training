class ProductListPage {
  private cartButton: string;
  private checkoutButton: string;

  constructor() {
    this.cartButton = "[title='Add to cart']";
    this.checkoutButton = "[title='Proceed to checkout']";
  }

  public addToCart(): void {
    cy.get(this.cartButton).click();
  }

  public proceedToCheckout(): void {
    cy.get(this.checkoutButton).click();
  }
}

export {ProductListPage};
