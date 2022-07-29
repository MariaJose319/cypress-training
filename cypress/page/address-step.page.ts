class AddressStepPage {
    private checkoutButton: string;

    constructor() {
      this.checkoutButton = "[name = 'processAddress']";
    }
  
    public proceedToCheckout(): void {
        cy.get(this.checkoutButton).click();
    }
  }
  
  export {AddressStepPage};
