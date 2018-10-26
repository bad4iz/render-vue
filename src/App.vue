<template>
  <div id="app">
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <br>
      <div>{{getElementValue}}</div>
    <div v-if="checked">
      <my-async-component />
    </div>
    <ul>
         <li v-for="(item) in getList" v-bind:key="item.id">
            <h1>id:{{item.id}}</h1>
            {{item.value}}
             <card  v-bind:card="item"/>
        </li>
    </ul>
  </div>
</template>

<script>
import card from './components/card';

export default {
  name: 'App',
  components: {
    card,
    'my-async-component': () => import('./components/AsyncHelloWorld')
  },
  data() {
    return {
      // lists: this.$store.state.lists,
      checked:false
    };
  },
  computed: {
    getList() {
      console.log('getlist');
      return this.$store.getters.lists;

    },
    getElementValue() {
      console.log('getValue');
      return this.$store.state.element.value
    }
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  border: 1px solid red;
  margin: 10px;
  padding: 10px;
}
a {
  color: #42b983;
}
</style>
