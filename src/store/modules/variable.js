/* eslint-disable linebreak-style */
const state = {
  tokenData: window.sessionStorage.token ? window.sessionStorage.token : ''
};
const mutations = {
  // eslint-disable-next-line no-shadow
  setToken(state, payload) {
    state.tokenData = payload;
  }
};
export default {
  namespaced: true,
  state,
  mutations
};
