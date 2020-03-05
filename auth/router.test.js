require("dotenv").config();

const request = require("supertest");
const server = require("../api/server.js");

// const authToken = process.env.TOKEN;

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJTZWVkSm9uZXMiLCJpYXQiOjE1ODM0MjYxODgsImV4cCI6MTU4MzU5ODk4OH0.HN3AUHs4DCGbji3XbwU5_WLdoFdmfL7O2-V4AJyVjwo";

describe("authentication router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("POST /register", function() {
    it("should return the username of the new user", async function() {
      let newUser1 = await request(server)
        .post("/api/auth/register")
        .send({
          username: "regtest",
          password: "1234",
          tolerance: 3,
          desiredEffect: "Fly"
        });

      expect(newUser1.body.username).toBe("regtest");

      let removedUser = await request(server)
        .delete(`/api/users/${newUser1.body.id}`)
        .set("Authorization", authToken);

      expect(removedUser.body).toEqual({ message: "This user has been nuked" });
    });

    it("should confirm the new user has a tolerance property", async function() {
      let newUser2 = await request(server)
        .post("/api/auth/register")
        .send({
          username: "regtest2",
          password: "1234",
          tolerance: 3,
          desiredEffect: "Fly"
        });

      expect(newUser2.body.tolerance).toBe(3);

      let removedUser = await request(server)
        .delete(`/api/users/${newUser2.body.id}`)
        .set("Authorization", authToken);

      expect(removedUser.body).toEqual({ message: "This user has been nuked" });
    });
  });

  describe("POST /login", function() {
    it("should return a JWT", function() {
      return request(server)
        .post("/api/auth/login")
        .send({
          username: "SeedSmith",
          password: "pass"
        })
        .then(response => {
          expect(response.body).toHaveProperty("token");
        });
    });
  });
});
