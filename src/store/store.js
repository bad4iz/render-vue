import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    lists: [
      {
        id: 1,
        check: true,
        value: '',
      },
      {
        id: 2,
        check: false,
        value: '',
        subcards: [
          {
            id: 21,
            check: true,
            value: '',
          },
          {
            id: 22,
            check: false,
            value: ''
          },
          {
            id: 23,
            check: false,
            value: ''
          }
        ],
      },
      {
        id: 3,
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
    card: state => (id) => {
      console.log('card', id)
      for (let i=0; i<state.lists.length; i += 1) {
        if (state.lists[i].id===id) {
          return state.lists[i];
        }
        if(state.lists[i].subcards){
          for (let j = 0; j < state.lists[i].subcards.length; j++) {
            if(state.lists[i].subcards[j].id == id){
              return state.lists[i].subcards[j];
            }
            // вставить суда рекурсию
          }
        }
      }
    },
  },
  mutations: {
    updateById(state,  {item} ) {
      state.lists = state.lists.map((el) => {

        if (Array.isArray(el.subcards)) {
          const newEl={subcards : el.subcards.map((el) => {
            if (el.id === item.id) {
              // console.log(el.id)
              el.value = item.value;
            }
            return el;
          })}
          return newEl
        }
        if (el.id === item.id) {
          el.value = item.value;
          return el;
        }
        return el;
      });
      state.element = {value: item.value}
    },
    update(state, { type, item }) {
      state[type] = { ...state[type], item };
    },
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
