const request = require('supertest');
const app = require('../../index');

describe('User Endpoints', () => {

  it("should get all users", async () => {
    const res = await request(app)
      .get("/api/users/")
      .expect(200)
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        "firstName": "test",
        "lastName": "is cool",
        "email": "coolTest@gmail.com",
        "password": "1234",
        "image": "no-image",
        "RoleId": 1
      })
    expect(res.statusCode).toEqual(201)
  })



  })
