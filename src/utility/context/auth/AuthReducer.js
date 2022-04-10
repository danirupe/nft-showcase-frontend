export const AuthReducer = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case '[auth] login':
      return {
        ...payload,
        logged: true,
        isTokenValidated: true
      }

    case '[auth] logout':
      return {
        logged: false,
        isTokenValidated: true
      }

    default:
      return state
  }
}
