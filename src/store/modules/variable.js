/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
const state = {
  tokenData: window.sessionStorage.token ? window.sessionStorage.token : '',
  userName: window.sessionStorage.userName ? window.sessionStorage.userName : '',
  userOrganization: window.sessionStorage.userOrganization ? window.sessionStorage.userOrganization : ''
};
const mutations = {
  setToken(state, payload) {
    state.tokenData = payload;
  },
  setUserName(state, payload) {
    state.userName = payload
  },
  setUserOrganization(state, payload) {
    state.userOrganization = payload
  }

};
export default {
  namespaced: true,
  state,
  mutations
};
