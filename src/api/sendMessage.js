import { instance } from './instance'

export const messagesAPI = {
  sendMessage(data) {
    return instance.post('/sendMessage', { data })
  },
}
