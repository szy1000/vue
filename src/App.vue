<template>
  <div id="app">
    <iheader :seller="seller"></iheader>
    <ul class="tab">
      <li class="tab-item">
        <router-link to='/goods'>商品</router-link>
      </li>
      <li class="tab-item">
        <router-link to='/ratings'>评论</router-link>
      </li>
      <li class="tab-item">
        <router-link to='/seller'>商家</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import iheader from './components/header/header';

  const ERR = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        if (response.body.errno === ERR) {
          this.seller = response.body.data;
        }
      });
    },
    components: {
      iheader
    }
  };
</script>

<style scoped lang="scss">
  @import "./common/common.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgba($brand-bg,.1));
      .tab-item{
        flex: 1;
        text-align: center;
      }
      a{
        display: block;
        &.active{
          color: rgb(240,20,20)
        }
      }

    }
  }
</style>
