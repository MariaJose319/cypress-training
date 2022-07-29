class AdressStepPage {
    private checkoutButton: string;

    constructor() {
      this.checkoutButton = "[name = 'processAddress']";
    }
  
    public proceedToCheckoutIII(): void {
        cy.get(this.checkoutButton).click();
    }
  }
  
  export {AdressStepPage};
