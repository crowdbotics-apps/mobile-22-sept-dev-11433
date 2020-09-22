import axios from "axios"
import { NEW_CONNECTOR_GFGFGHF_TOKEN } from "react-native-dotenv"
const newConnectorgtestfvg = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11433/storyboard/11048/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectordgfdgg = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11433/storyboard/11048/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectorgfgfghf = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11240/storyboard/10919/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${NEW_CONNECTOR_GFGFGHF_TOKEN}`
  }
})
const plugin13 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7238/storyboard/8485/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const plugin11 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7307/storyboard/8491/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const mobile22septAPI = axios.create({
  baseURL: "https://mobile-22-sept-dev-11433.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return mobile22septAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return mobile22septAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return mobile22septAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return mobile22septAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_hhgjhg_list() {
  return mobile22septAPI.get(`/api/v1/hhgjhg/`)
}
function api_v1_hhgjhg_create(requestBody) {
  return mobile22septAPI.post(`/api/v1/hhgjhg/`, requestBody)
}
function api_v1_hhgjhg_read() {
  return mobile22septAPI.get(`/api/v1/hhgjhg/{id}/`)
}
function api_v1_hhgjhg_update(requestBody) {
  return mobile22septAPI.put(`/api/v1/hhgjhg/{id}/`, requestBody)
}
function api_v1_hhgjhg_partial_update(requestBody) {
  return mobile22septAPI.patch(`/api/v1/hhgjhg/{id}/`, requestBody)
}
function api_v1_hhgjhg_delete() {
  return mobile22septAPI.delete(`/api/v1/hhgjhg/{id}/`)
}
function api_v1_homepage_list() {
  return mobile22septAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return mobile22septAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return mobile22septAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return mobile22septAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_hytuyt_list() {
  return mobile22septAPI.get(`/api/v1/hytuyt/`)
}
function api_v1_hytuyt_create(requestBody) {
  return mobile22septAPI.post(`/api/v1/hytuyt/`, requestBody)
}
function api_v1_hytuyt_read() {
  return mobile22septAPI.get(`/api/v1/hytuyt/{id}/`)
}
function api_v1_hytuyt_update(requestBody) {
  return mobile22septAPI.put(`/api/v1/hytuyt/{id}/`, requestBody)
}
function api_v1_hytuyt_partial_update(requestBody) {
  return mobile22septAPI.patch(`/api/v1/hytuyt/{id}/`, requestBody)
}
function api_v1_hytuyt_delete() {
  return mobile22septAPI.delete(`/api/v1/hytuyt/{id}/`)
}
function api_v1_login_create() {
  return mobile22septAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return mobile22septAPI.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return mobile22septAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return mobile22septAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return mobile22septAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return mobile22septAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return mobile22septAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return mobile22septAPI.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return mobile22septAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return mobile22septAPI.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return mobile22septAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return mobile22septAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return mobile22septAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_hhgjhg_list,
  api_v1_hhgjhg_create,
  api_v1_hhgjhg_read,
  api_v1_hhgjhg_update,
  api_v1_hhgjhg_partial_update,
  api_v1_hhgjhg_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_hytuyt_list,
  api_v1_hytuyt_create,
  api_v1_hytuyt_read,
  api_v1_hytuyt_update,
  api_v1_hytuyt_partial_update,
  api_v1_hytuyt_delete,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
