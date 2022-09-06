class PaymentStepPage {
    private payButton: string;
    private confirmButton: string;
    private confirmMessage: string;

    constructor() {
      this.payButton = "[title='Pay by bank wire']";
      this.confirmButton = "#cart_navigation > [type='submit']";
      this.confirmMessage = ".cheque-indent > .dark";
    }
  
    public payByBankWire(): void {
        cy.get(this.payButton).click();
    }

    public confirmOrder(): void {
        cy.get(this.confirmButton).click();
    }

    public getConfirmMessage(): any {
        return cy.get(this.confirmMessage);
    }
  }
  
  export {PaymentStepPage};
