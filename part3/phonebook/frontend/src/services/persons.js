import axios from "axios"

const baseUrl = "/api/persons"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = personObj => {
  const request = axios.post(baseUrl, personObj)
  return request.then(response => response.data)
}

const del = id => {
  axios.delete(`${baseUrl}/${id}`)
}

const updateNumber = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson)
  console.log(baseUrl)
  return request.then(response => response.data)
}

export default { getAll, create, del, updateNumber }
