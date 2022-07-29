class ShippingStepPage {
    private termsCheckbox: string;
    private checkoutButton: string;

    constructor() {
      this.termsCheckbox = "#cgv";
      this.checkoutButton = "[name='processCarrier']";
    }
  
    public acceptTerms(): void {
        cy.get(this.termsCheckbox).check();
    }

    public proceedToCheckoutIV(): void {
        cy.get(this.checkoutButton).click();
    }
  }
  
  export {ShippingStepPage};
