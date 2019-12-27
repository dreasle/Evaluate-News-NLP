const urlCheck = require('./urlChecker')

test('Verifies URL is valid', () => {
  expect(urlCheck.verifyUrl('https://jestjs.io/docs/en/getting-started')).toBe(true)
})

test('Verifies URL is invalid', () => {
  expect(urlCheck.verifyUrl('invalid.url')).toBe(false)
})
