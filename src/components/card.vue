<template>
  <div class="hello">
    <h2>Card Links</h2>

     <button v-on:click="mydelete">delete</button>
     <input type="text" v-model="message">
   <div v-if="card.subcards">
     <ul>
         <li v-for="(item) in card.subcards"
           v-bind:key="item.id">
        <h1>id:{{item.id}}</h1>
          {{item.value}}
          <card  v-bind:card="item"/>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['card'],
  computed: {
    message: {
      get () {
        const cardState = this.$store.getters.card(this.card.id);
        if(cardState){
          return this.$store.getters.card(this.card.id).value;
        } else {
          return '';
        }
      },
      set (value) {
        console.log('set', value);
        const item = { id: this.card.id,  value }
        this.$store.commit('updateById', { item });
      }
   },
  },
  methods: {
    mydelete: function (event) {
      this.$store.dispatch('delete', this.card.id);
    }
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
