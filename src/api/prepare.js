import { get, post } from './rule'

export const checkToken = (token) => post(`/framework-service/oauth/check_token?token=${token}`)
export const userDimension = (clientId, userId) => get(`/framework-service/bas/user/dimension/${userId}/${clientId}`)
export const routerPrepare = (response) => post('/framework-service/bas/router', response)
