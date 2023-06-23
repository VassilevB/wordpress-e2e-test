// import { beforeEach } from "mocha"

describe('Test basic front-end functionality', () => {
  
  // beforeEach(() => {                                    // towa e hook
  //   cy.visit(`https://mihail-petrov.me/`)
  // });

  // Да се провери дали името на приложението ми е коректно
  // като потребител на системата искам да се логна в https://mihail-petrov.me
  // и искам да видя на първата страница на приложението "Mindblown: a blog about philosophy"
  it('shows a correct title of the app on the HOME page', () => {
    cy.visit(`https://mihail-petrov.me/`);
    cy.log("Try to locate specific text");
    // cy.contains("a blogA.")       // Взема елемент и може да го върне или да го верифицира
  
  // const element = cy.get(".alignwide")
  // element.contains("a blog")

  // const element = cy.contains("Sample Page");   // this is in a queue and this is why this is not recommended
  // element.click();                              // this is in a queue and this is why this is not recommended

      
      // cy.contains("Sample Page");                   // this is in a queue and this is why this is not recommended
      //   cy.click();                                  // this is in a queue and this is why this is not recommended

// this is the correct approach
cy.get(".alignwide", {timeout: 10000}).contains("a blog"); // parent + child  // get is a query selector inside JS // to4kata e funkcionalen prefix // # == id="test"  // to4kata e ekvivalentna na class name (  [name]=""  )

  })

it ("locate sample page and navigate to different part of the app"), () => {

cy.visit("https://mihail-petrov.me/");
cy.contains("Sample Page").click();


// //*[@id="modal-1-content"]/ul/li/a
// /html/body/div/header/div/div/nav/div/div/div/div/ul/li/a

cy.xpath(`//*[@id="modal-1-content"]/ul/li/a`).click();

}

it("Locates wordpress link and navigate to the official website", () =>  {
  cy.visit("https://mihail-petrov.me/");
  cy.xpath(`/html/body/div/footer/div/div/p[2]/a`, {timeout: 5000}).click();
  cy.wait(5000);


  cy.origin(`https://wordpress.org`, () => {
    cy.contains("WordPress:");
  });
})

it.only("create a new comment on already existing post"), () => {

  cy.visit("https://mihail-petrov.me/");
  cy.get("h2").click();
  cy.get("h1").contains("Hello world!");
  cy.get("#comment").type(`sample comment`);
  cy.get("#author").type(`Mihail Petrov`);
  cy.get("#email").type(`mail@mihail.petrov.me`);
  cy.get("#submit").click();
  cy.get(".comment-awaiting-moderation");

}

})