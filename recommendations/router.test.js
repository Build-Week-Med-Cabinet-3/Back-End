require("dotenv").config();

const request = require("supertest");
const server = require("../api/server.js");

// const authToken = process.env.TOKEN;

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJTZWVkSm9uZXMiLCJpYXQiOjE1ODM0MjYxODgsImV4cCI6MTU4MzU5ODk4OH0.HN3AUHs4DCGbji3XbwU5_WLdoFdmfL7O2-V4AJyVjwo";

describe("recommendations router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("POST /api/recs", function() {
    it("should return a status code 200", function() {
      return request(server)
        .get("/api/recs")
        .set("Authorization", authToken)
        .then(response => {
          expect(response.status).toBe(200);
        });
    });

    it("should return a JSON formatted body", async function() {
      const testResponse = await request(server).get("/api/recs");

      expect(testResponse.type).toMatch(/json/);
    });
  });
});
