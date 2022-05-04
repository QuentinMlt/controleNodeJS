const server = require('../server.js')
const supertest = require('supertest')

const request = supertest(server)

describe("L'api name", () => {
    test('GET /api/names', async () => {
        const response = await request
            .get('/api/names')
            .expect(200)
            .expect('Content-Type', 'application/json')
        expect(response.body).toMatchObject([
            [0, { nom: 'Alice' }],
            [1, { nom: 'Bob' }],
            [2, { nom: 'Charlie' }]
        ])
        
    })
})


describe("Test des pages", () => {
    test("GET /", async () => {
        const response = await request
            .get('/')
            .expect(200)
            .expect('Content-Type', 'text/html')
        expect(response.text).toMatch(/HELLO/)
    })

    test("test de la page 404", async () => {
        const response = await request
            .get('/nexistepas')
            .expect(404)
            .expect('Content-Type', 'text/html')
        expect(response.text).toMatch(/404/)
    })
    
    test("test de la page 401", async () => {
        const response = await request
            .post('/')
            .expect(401)
            .expect('Content-Type', 'text/html')
        expect(response.text).toMatch(/401/)
    })

    test("test de la page index", async () => {
        const response = await request
            .get('/')
            .expect(200)
            .expect('Content-Type', 'text/html')
        expect(response.text).toMatch(/Quentin/)
    })

    test("test de la page 500", async () => {
        const response = await request
            .get("/test500")
            .expect(500)
            .expect('Content-Type', 'text/html')
        expect(response.text).toMatch(/500/)
    })
})

// afterAll(done => {
//     server.close();
//     done();
// });
