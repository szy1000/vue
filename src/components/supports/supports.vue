<template>
  <div>
    <ul class="supports">
      <li v-for="(item,index) in seller.supports">
        <span class="icon" :class="classMap[index]"></span>
        <span class="text">{{seller.supports[index].description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>

<style scoped lang="scss">
  @import "../../common/common.scss";
  .supports{
    font-size: 0;
    li{
      margin-bottom: 12px; 
      padding: 0 12px;
      &:last-child{
        margin-bottom: 0;
      }
    }
    .icon{
      display: inline-block;
      margin-right: 6px;
      vertical-align: middle;
      width: 16px;
      height: 16px;
      background-size: cover;
      background-repeat: no-repeat;
      &.decrease{
        @include bg-image('decrease_2');
      }
      &.decrease{
        @include bg-image('decrease_2');
      }
      &.discount{
        @include bg-image('discount_2');
      }
      &.guarantee{
        @include bg-image('guarantee_2');
      }
      &.invoice{
        @include bg-image('invoice_2');
      }
      &.special{
        @include bg-image('special_2');
      }
    }
    .text{
      display: inline-block;
      vertical-align: middle;
      line-height: 16px;
      font-size: 12px;
    }
  }
</style>
