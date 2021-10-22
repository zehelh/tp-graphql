import axios from 'axios'

const gitList = {
  namespaced: true,
  state () {
    return {
      url: 'https://api.github.com/users/zehelh/repos',
      urlFind: 'https://api.github.com/repositories/',
      list: {},
      project: {}
    }
  },
  mutations: {
    UPDATE_LIST (state, payload) {
      state.list = payload
    },
    UPDATE_PROJECT (state, payload) {
      state.project = payload
      console.log(state.project)
    }
  },
  actions: {

    // GETTERS

    // START getProjects
    async getProjects (context) {
      const config = {
        Authorization: 'Bearer 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',
        'Content-Type': 'application/json'
      }
      const response = await axios.get(context.state.url, config)
      context.commit('UPDATE_LIST', response.data)
    },
    // END getProjects

    // START findProjects
    async findProject (context, payload) {
      console.log(payload)
      const config = {
        Authorization: 'Bearer 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',
        'Content-Type': 'application/json'
      }
      const tmpUrl = context.state.urlFind + payload
      const response = await axios.get(tmpUrl, config)
      context.commit('UPDATE_PROJECT', response.data)
    }
    // END findProjects
  }

}

export default gitList
