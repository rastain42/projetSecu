import { createStore } from 'vuex';
import axios from 'axios';

const target = new EventTarget();

export default createStore({
  state: {
    user: {
      isAuthenticated: false,
      token: '',
    },
  },
  mutations: {
    authenticateUser(state, user: any) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, credentials: { username: string, password: string}) {
      console.log('hello');
      try {
        const res = await axios.post('http://localhost:3000/signIn', credentials);

        console.log('OKK');
        this.commit('authenticateUser', { isAuthenticated: true, token: res.data });
      } catch (error) {
        throw new Error();
      }
    },
  },
  modules: {
  },
});
