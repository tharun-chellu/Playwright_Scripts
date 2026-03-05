import { test, expect } from '@playwright/test'


test.only('api_post_request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "chellu",
            "job": "It"
        }
    })

    expect(response.status()).toBe(201);

    const text = await response.text();

    expect(text).toContain('chellu');

    console.log(await response.json());

})




test('api_get request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200);

    const text = await response.text();

    expect(text).toContain('Janet');

    console.log(await response.json());

})