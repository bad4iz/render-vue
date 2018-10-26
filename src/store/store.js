import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lists: [
      {
        id: 0,
        check: true,
        value: '',
        subcards: [1],

      },
      {
        id: 1,
        check: true,
        value: 'dddddd',
        subcards: [2, 3],

      },
      {
        id: 2,
        check: false,
        value: '',
        subcards: [21, 22],
      },
      {
        id: 3,
        check: false,
        value: '',
        subcards: [21, 22],
      },
      {
        id: 21,
        check: false,
        value: '',
      },
      {
        id: 22,
        check: false,
        value: '',
      }
    ],
    element: {
      value: ''
    }
  },
  getters: {
    lists(state) {
      console.log('list')
      return state.lists;
    },
    card: state => (id) => state.lists.find(card => card.id ===id )
  },
  mutations: {
    updateById(state,  {type, item} ) {
      state[type] = state.lists.map((el) => {
        if(el.id ==item.id) {
          el.value = item.value;
        }
        return el;
      });
      state.element = {value: item.value}
    },
    // update(state, { type, item }) {
    //   state[type] = { ...state[type], item };
    // },
    delete(state, id) {
      state.lists = state.lists.filter(card => card.id !== id)
    }
  },
  actions: {
    delete({ commit }, id) {
      console.log(id);
      commit('delete', id);
    },
  },
});
window.store = store;
export default store;
