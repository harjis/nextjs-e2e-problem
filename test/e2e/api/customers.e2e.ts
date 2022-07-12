describe.only("cy.request()", () => {
  it("passes", () => {
    cy.request({
      method: "POST",
      url: "/api/customers/",
      failOnStatusCode: false,
      body: {
        name: "test",
      },
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.method).to.eq("POST")
    })

    cy.request({
      method: "POST",
      url: "/api/customers",
      failOnStatusCode: false,
      body: {
        name: "test",
      },
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.method).to.eq("POST")
    })
  })
})
