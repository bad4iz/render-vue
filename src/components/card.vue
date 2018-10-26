<template>
    <div class="hello">
        <h2>Card Links</h2>
        {{card}}


        <button v-on:click="mydelete">delete</button>
        <input type="text" v-model="message">
        <div v-if="card.subcards">
            <ul>
                <li v-for="(item) in card.subcards" v-bind:key="item.id">
                    <!--<h1>id:{{cardA.id}}</h1>-->
                    {{ item }}
                    <card v-bind:id="item"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['id'],
    data() {
      return {
        card: this.$store.getters.card(this.id)

      };
    },
    computed: {

        message: {
          get () {
            const cardState = this.$store.getters.card(this.id);
            if(cardState){
              return this.$store.getters.card(this.id).value;
            } else {
              return '';
            }
          },
          set (value) {
            console.log('set', value);
            // const item = { id: this.card.id,  value }
            this.$store.commit('updateById', { id: this.id,  value });
          }
       },
      //   card: function () {
      //     return this.$store.getters.card(this.id);
      //   }
    },
    methods: {
      mydelete: function (event) {
        this.$store.dispatch('delete', this.id);
      },
      //
      //
      // },
    }
  }
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
