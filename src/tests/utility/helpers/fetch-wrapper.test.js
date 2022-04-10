import { fetchWrapper } from '../../../utility/helpers/fetch-wrapper'

describe('Pruebas en el archivo fetch-wrapper', () => {
  test('should return an object', () => {
    const res = fetchWrapper.get('')

    expect(typeof res).toBe('object')
  })
})
