require("dotenv").config();

const request = require("supertest");
const server = require("../api/server.js");

const testUserId = 1;

const testIndex = 0;

// const authToken = process.env.TOKEN;

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJTZWVkSm9uZXMiLCJpYXQiOjE1ODM0MjYxODgsImV4cCI6MTU4MzU5ODk4OH0.HN3AUHs4DCGbji3XbwU5_WLdoFdmfL7O2-V4AJyVjwo";

describe("users router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/users/:id", function() {
    it("should return user's information containing medicinalUse, tolerance, medicalConditions, and desiredEffect", function() {
      return request(server)
        .get(`/api/users/${testUserId}`)
        .set("Authorization", authToken)
        .then(response => {
          expect(response.body).toHaveProperty("medicinalUse");
          expect(response.body).toHaveProperty("tolerance");
          expect(response.body).toHaveProperty("medicalConditions");
          expect(response.body).toHaveProperty("desiredEffect");
        });
    });
  });

  describe("GET /api/users/:id/recs", function() {
    it("should return recommendations containing strain, type, flavor, and description", function() {
      return request(server)
        .get(`/api/users/${testUserId}/recs`)
        .set("Authorization", authToken)
        .then(response => {
          expect(response.body[testIndex]).toHaveProperty("Strain");
          expect(response.body[testIndex]).toHaveProperty("Type");
          expect(response.body[testIndex]).toHaveProperty("Flavor");
          expect(response.body[testIndex]).toHaveProperty("Effects");
          expect(response.body[testIndex]).toHaveProperty("Description");
        });
    });
  });

  describe("GET /api/users/:id/favs", function() {
    it("should return favorites containing strain, type, flavor, and description", function() {
      return request(server)
        .get(`/api/users/${testUserId}/favs`)
        .set("Authorization", authToken)
        .then(response => {
          expect(response.body[testIndex]).toHaveProperty("Strain");
          expect(response.body[testIndex]).toHaveProperty("Type");
          expect(response.body[testIndex]).toHaveProperty("Flavor");
          expect(response.body[testIndex]).toHaveProperty("Effects");
          expect(response.body[testIndex]).toHaveProperty("Description");
        });
    });
  });
});

// Add test for returning unauthorized error
