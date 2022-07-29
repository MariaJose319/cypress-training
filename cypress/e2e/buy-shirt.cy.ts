import {MenuContentPage, ProductListPage, ShoppingCartPage, LoginPage,
  AddressStepPage, ShippingStepPage, PaymentStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productListPage.addToCart();
    productListPage.proceedToCheckout();

    shoppingCartPage.proceedToCheckout();

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.proceedToCheckout();

    shippingStepPage.acceptTerms();
    shippingStepPage.proceedToCheckout();

    paymentStepPage.payByBankWire();
    paymentStepPage.confirmOrder();
    paymentStepPage.getConfirmMessage().should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});

