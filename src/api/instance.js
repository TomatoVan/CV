import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://cv-smtp.herokuapp.com/',
  withCredentials: true,
})
