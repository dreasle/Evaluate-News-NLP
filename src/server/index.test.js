const request = require('supertest')
const app = require('./index.js')

test('Root endpoint', ()=> {
    const res = request(app)
        .get('/')
        .then(res => {
            expect(res.statusCode).toBe(200)
            // expect(res.statusCode).toEqual(200)
        })
})

test('API sentiment is subjective', ()=> {
    const res = request(app)
        .post('/sentiment')
        .set('Content-Type', 'application/json')
        .send('{"sentmturl": "https://jestjs.io/docs/en/getting-started"}')
        .then(res => {
            // console.log(res)
            expect(res.subjectivity).toEqual('subjective')
        })
})