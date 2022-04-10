import { api } from '../services/api'

const get = (url, headers) => {
  return api
    .get(url, { headers: headers })
    .then((res) => handleResponse(res))
    .catch((err) => {
      return handleResponse(err.response)
    })
}

const post = (url, body, headers) => {
  return api
    .post(url, body, { headers: headers })
    .then((res) => {
      return handleResponse(res)
    })
    .catch((err) => {
      return handleResponse(err.response)
    })
}

const postImage = (url, body, headers) => {
  const form = new FormData()

  for (let key in body) {
    form.append(key, body[key])
  }
  console.log(form)
  return api
    .post(url, form, {
      headers: { 'Content-Type': 'multipart/form-data', ...headers }
    })
    .then((res) => {
      return handleResponse(res)
    })
    .catch((err) => {
      return handleResponse(err.response)
    })
}

const put = (url, body, headers) => {
  return api
    .put(url, body, { headers: headers })
    .then((res) => {
      return handleResponse(res)
    })
    .catch((err) => {
      return handleResponse(err.response)
    })
}

const _delete = (url, headers) => {
  return api
    .delete(url, { headers: headers })
    .then((res) => {
      return handleResponse(res)
    })
    .catch((err) => {
      return handleResponse(err.response)
    })
}

function handleResponse(response) {
  const data = response
  if ((data && data.status === 200) || (data && data.status === 201)) {
    return data.data
  } else {
    const error = data.data
    return Promise.reject(error)
  }
}

export const fetchWrapper = {
  get,
  post,
  postImage,
  put,
  _delete
}
