const request = require("supertest");
const server = require("../api/server.js");

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU4MzE5MTgyMywiZXhwIjoxNTgzMjc4MjIzfQ.DsI-F_gxvlxhMOdJTkaV51hF-y7stw3RIk684tRcIug";

describe("authentication router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

//   describe("POST /register", function() {
//     return request(server).get("/api");
//   });
});
