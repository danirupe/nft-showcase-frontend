import { fetchWrapper } from '../helpers/fetch-wrapper'
import config from './config'

function getAll(path, headers) {
  return fetchWrapper.get(config.url + path, headers)
}

function getAllPag(path, body, headers) {
  return fetchWrapper.post(config.url + path, body, headers)
}

function getOne(path, id, headers) {
  return fetchWrapper.get(config.url + path + id, headers)
}

function find(path, tag) {
  return fetchWrapper.post(config.url + path, tag)
}

function update(path, id, data, headers) {
  return fetchWrapper.put(config.url + path + id, data, headers)
}

function add(path, data, headers) {
  return fetchWrapper.post(config.url + path, data, headers)
}

function addImage(path, data, headers) {
  return fetchWrapper.postImage(config.url + path, data, headers)
}

function login(path, data) {
  return fetchWrapper.post(config.url + path, data)
}

function register(path, data) {
  return fetchWrapper.post(config.url + path, data)
}

function remove(path, id, headers) {
  return fetchWrapper._delete(config.url + path + id, headers)
}

function startChecking(path, headers) {
  return fetchWrapper.get(config.url + path, headers)
}

export const api = {
  getAll,
  getAllPag,
  getOne,
  find,
  add,
  addImage,
  login,
  register,
  update,
  remove,
  startChecking
}
