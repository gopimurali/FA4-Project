// import { AppPage } from './app.po';
import { browser, Button, by, element, Key, logging } from "protractor";
describe("hoopla App", () => {
  it("should navigate to welcome page", () => {
    browser.get("http://localhost:4200");
    expect(browser.getCurrentUrl()).toContain("welcome");

  });
  it("should navigate to dashboard page", () => {
    const button = element(by.name("visit"));
    button.click();
    // browser.get("http://localhost:4200/dashboard");
    expect(browser.getCurrentUrl()).toContain("dashboard");

  });
  it("should navigate to login page", () => {
    const button = element(by.name("logout"));
    button.click();
    // browser.get("http://localhost:4200/dashboard");
    expect(browser.getCurrentUrl()).toContain("login");

  });
  it("should login successfully", () => {
    const email = element(by.name("txtEmail"));
    const pass = element(by.name("txtPass"));
    email.sendKeys("pmvgk@gmail.com");
    pass.sendKeys("As!2345");
    const button = element(by.name("login"));
    button.click();
    expect(browser.getCurrentUrl()).toContain("dashboard");
  });
  it("should navigate to items",  () => {
      const Button1 = element(by.name("Electronics"));
      Button1.click();
    // })
    // it('should navigate to products details',() =>{
      // setTimeout(() => {
      // }, 3000);
      element.all(by.name("nameofitem")).then((allButtons) => {
        allButtons[0].click();
        // setTimeout(()=>{
        //   browser.actions().sendKeys(Key.ENTER).perform();
        // },3000)
        expect(browser.getCurrentUrl()).toContain("products");
      });

  });
  it("should purchase item", () => {
    // element(by.name("buynow")).then(function (Button) {
    //   Button.click();
    // })
    const Button2 = element(by.name("buynow"));
    Button2.click();
    // expect(browser.getCurrentUrl()).toContain("vieworders");
    setTimeout(() => {
          // browser.actions().sendKeys(Key.ENTER).perform();
        }, 3000);
    const goback = element(by.name("goback"));
    goback.click();
    expect(browser.getCurrentUrl()).toContain("dashboard");
  });
  it("should view orders", () => {
    const vieworders = element(by.name("vieworders"));
    vieworders.click();
    expect(browser.getCurrentUrl()).toContain("vieworders");
  });
  it("should logout succesfully", () => {
    const logout = element(by.name("logout"));
    logout.click();
    expect(browser.getCurrentUrl()).toContain("dashboard");
  });

// import { AppPage } from './app.po';
// import { browser, logging, element,by } from 'protractor';

// describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   it('should display welcome message', () => {
//     page.navigateTo();
//     expect(page.getTitleText()).toEqual('myapp app is running!');
//   });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
// });
// import { AppPage } from './app.po';
// import { browser, logging, element,by } from 'protractor';

// describe('workspace-project App', () => {
//   it('should navigate to dashboard page',()=>{
//     browser.get("http://localhost:3000");
//     expect(browser.getCurrentUrl()).toContain("dashboard");
//     var login = element(by.name("login"));
//     login.click();
//   } )
//   it('should navigate to login page',()=> {

//     expect(browser.getCurrentUrl()).toContain("login");
//   })
//   it('login successfully', ()=> {
//     let username = element(by.id("userName"));
//     let password = element(by.id("password"));

//     username.sendKeys("pmvgk@gmail.com");
//     password.sendKeys("As!2345");
//     username.sendKeys('admin@g');
//     password.sendKeys('As!2345');
//     var button = element(by.name("login"));
//     button.click();
//       })

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
