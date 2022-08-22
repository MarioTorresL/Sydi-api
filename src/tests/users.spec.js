const request = require('supertest');
const app = require('../../index');

describe('User Endpoints', () => {

  it("should get all users", async () => {
    const res = await request(app)
      .get("/api/users/")
      .expect(200)
  });

  })
