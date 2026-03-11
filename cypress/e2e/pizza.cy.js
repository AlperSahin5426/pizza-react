describe("Pizza Order Form" , ()=>{
  it("isim inputuna yazi yazilabilir", ()=>{
    cy.visit("http://localhost:5173/order")
    cy.get("#name").type("Alper")
    cy.get("#name").should("have.value", "Alper")

  })
  it("checkbox kontrol" , ()=>{
    cy.visit("http://localhost:5173/order")
    cy.get(`input[value="zeytin"]`).check().should("be.checked")
    cy.get(`input[value="mantar"]`).check().should("be.checked")
    cy.get(`input[value="mısır"]`).check().should("be.checked")

  })
  it("form kontrol",()=>{
    cy.visit("http://localhost:5173/order");
    cy.get("#name").type("Alper")
    cy.get(`input[value="orta"]`).check()
    cy.get(`#dough`).select("ince");
    cy.get('input[value="zeytin"]').check();
    cy.get('input[value="mantar"]').check();
    cy.get('input[value="mısır"]').check();
    cy.get('input[value="sucuk"]').check();
    cy.contains("button", "Sipariş Ver").should("not.be.disabled").click();
    cy.url().should("include","/success");
  })
  it("isim 3 karakterden kısa ise buton disabled olur", () => {
    cy.visit("http://localhost:5173/order");
  
    cy.get("#name").type("Al");
    cy.get('input[value="orta"]').check();
    cy.get("#dough").select("ince");
  
    cy.get('input[value="zeytin"]').check();
    cy.get('input[value="mantar"]').check();
    cy.get('input[value="mısır"]').check();
    cy.get('input[value="sucuk"]').check();
  
    cy.contains("button", "Sipariş Ver").should("be.disabled");
  });
  it("4'ten az malzeme seçilirse buton disabled olur", () => {
    cy.visit("http://localhost:5173/order");
  
    cy.get("#name").type("Alper");
    cy.get('input[value="orta"]').check();
    cy.get("#dough").select("ince");
  
    cy.get('input[value="zeytin"]').check();
    cy.get('input[value="mantar"]').check();
    cy.get('input[value="mısır"]').check();
  
    cy.contains("button", "Sipariş Ver").should("be.disabled");
  });
  it("başarılı submit sonrası success sayfasında sipariş özeti görünür", () => {
    cy.visit("http://localhost:5173/order");
  
    cy.get("#name").type("Alper");
    cy.get('input[value="orta"]').check();
    cy.get("#dough").select("ince");
  
    cy.get('input[value="zeytin"]').check();
    cy.get('input[value="mantar"]').check();
    cy.get('input[value="mısır"]').check();
    cy.get('input[value="sucuk"]').check();
  
    cy.contains("button", "Sipariş Ver").should("not.be.disabled").click();
  
    cy.url().should("include", "/success");
    cy.contains("SİPARİŞ ALINDI");
    cy.contains("Boyut:");
    cy.contains("Hamur:");
    cy.contains("Sipariş Toplamı");
  });
}) 