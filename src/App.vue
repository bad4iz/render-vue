<template>
    <div id="app">
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        <br>
        <div>{{getElementValue}}</div>
        <div v-if="checked">
            <my-async-component/>
        </div>
        <card v-bind:id="this.$store.getters.card(0).id"/>
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
        checked: false
      };
    },
    computed: {
      getList() {
        console.log('getlist');
        return this.$store.getters.lists;

      },
      getElementValue() {
        console.log('getValue');
        return this.$store.state.element.value;
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
