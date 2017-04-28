<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    

    <ifooter :message= "msg" @connect="say"></ifooter>
  </div>
</template>

<script>
  import ifooter from '../components/footer/footer.vue'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      ifooter
    },
    methods: {
      say (son) {
        console.log(son)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../common/common.scss';
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    a {
      color: #42b983;
    }
  }
</style>
