class LoginPage {
    private email: string;
    private password: string;
    private emailInput: string;
    private passwordInput: string;
    private loginButton: string;
  
    constructor() {
      this.emailInput = "#email";
      this.passwordInput = "#passwd";
      this.email = "aperdomobo@gmail.com";
      this.password = "WorkshopProtractor";
      this.loginButton = "#SubmitLogin";
    }
  
    public login(): void {
        cy.get(this.emailInput).type(this.email);
        cy.get(this.passwordInput).type(this.password);
        cy.get(this.loginButton).click();
    }
  }
  
  export {LoginPage};
