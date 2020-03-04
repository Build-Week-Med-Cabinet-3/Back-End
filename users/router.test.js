require("dotenv").config();

const request = require("supertest");
const server = require("../api/server.js");

const testUserId = 1;

const testIndex = 0;

// const authToken = process.env.TOKEN;

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU4MzM0MTYzMiwiZXhwIjoxNTgzNDI4MDMyfQ.3dKmZZBVh1Gp9tYbq7nOYxymrOuHW-ZlV-u6UV-l7cY";

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
          expect(response.body[testIndex]).toHaveProperty("strain");
          expect(response.body[testIndex]).toHaveProperty("type");
          expect(response.body[testIndex]).toHaveProperty("flavor");
          expect(response.body[testIndex]).toHaveProperty("description");
        });
    });
  });

  describe("GET /api/users/:id/favs", function() {
    it("should return favorites containing strain, type, flavor, and description", function() {
      return request(server)
        .get(`/api/users/${testUserId}/favs`)
        .set("Authorization", authToken)
        .then(response => {
          expect(response.body[testIndex]).toHaveProperty("strain");
          expect(response.body[testIndex]).toHaveProperty("type");
          expect(response.body[testIndex]).toHaveProperty("flavor");
          expect(response.body[testIndex]).toHaveProperty("description");
        });
    });
  });
});

// Add test for returning unauthorized error
