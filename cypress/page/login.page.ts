class LoginPage {
    private emailInput: string;
    private passwordInput: string;
    private loginButton: string;
  
    constructor() {
      this.emailInput = "#email";
      this.passwordInput = "#passwd";
      this.loginButton = "#SubmitLogin";
    }
  
    public login(email: string , password: string): void {
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }
  }
  
  export {LoginPage};
