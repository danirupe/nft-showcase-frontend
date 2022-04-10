import '@testing-library/jest-dom'

describe('Pruebas en el archivo demo.test.js', () => {
  test('Los strings deben de ser iguales', () => {
    const mensaje = 'Hola mundo'

    const mensaje2 = `Hola mundo`

    expect(mensaje).toBe(mensaje2)
  })
})
