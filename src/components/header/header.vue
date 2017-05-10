<template>
  <div class="header">
    <div class="background">
      <img :src="seller.avatar" width="100%">
    </div>
  	<div class="header-wrapper clearfix">
  		<div class="avatar pull-left">
  			<img width="64" height="64" :src="seller.avatar">
  		</div>
      <div class="content pull-left">
        <div class="title">
          <span class="brand"></span>
          <h3 class="name">{{seller.name}}</h3>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="iconfont icon-keyboard_arrow_right"></i>
      </div>
  	</div>
  	<div class="bulletin-wrapper" @click="showDetail">
  		<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="iconfont icon-keyboard_arrow_right"></i>
  	</div>

    <div class="detail" v-show="detailShow">
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>

<style scoped lang="scss">
  @import "../../common/common.scss";

	.header{
    position: relative;
    color: $white;
    background-color: rgba(7,17,27,.5);
    overflow: hidden;
    .background{
      position: absolute;
      left: 0;
      top: 0;
      height: 137px;
      width: 100%;
      filter:blur(10px);
      z-index: -1;
    }
		.header-wrapper{
      position: relative;
			padding: 24px 12px 18px 24px;
      .avatar{
        img{
          border-radius: 2px;
        }
      }
      .content{
        margin-left: 16px;
      }
      .support-count{
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        font-size: 0;
        background-color: rgba($white,.2);
        .count{
          vertical-align: top;
          font-size: 10px;
        }
        i{
          margin-left: 2px;
          line-height: 24px;
          font-size: 10px;
        }
      }
    }
    .title{
      margin-bottom: 8px;
      font-size: 0;
      .brand{
        display: inline-block;
        width: 30px;
        height: 18px;
        vertical-align: top;
        @include bg-image("brand");
        background-size: cover;
        background-repeat: no-repeat;
      }
      h3.name{
        display: inline-block;
        margin-left: 6px;
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
      }
    }
    .description{
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 12px;
    }
    .supports{
      font-size: 0;
      .icon{
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        width: 12px;
        height: 12px;
        background-size: cover;
        background-repeat: no-repeat;
        &.decrease{
          @include bg-image('decrease_1');
        }
        &.discount{
          @include bg-image('discount_1');
        }
        &.guarantee{
          @include bg-image('guarantee_1');
        }
        &.invoice{
          @include bg-image('invoice_1');
        }
        &.special{
          @include bg-image('special_1');
        }
      }
      .text{
        line-height: 12px;
        font-size: 10px;
      }
    }
		.bulletin-wrapper{
      position: relative;
      padding: 0 22px 0 12px;
      height: 28px;
      line-height: 28px;
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: rgba(7,17,27,.2);
      .bulletin-title{
        display: inline-block;
        vertical-align: top;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        @include bg-image("bulletin");
        background-size: cover;
        background-repeat: no-repeat;
      }
      .bulletin-text{
        margin: 0 4px;
        font-size: 10px;
        line-height: 28px;
      }
      i{
        position: absolute;
        top: 8px;
        right: 12px;
        font-size: 10px;
      }
		}

    .detail{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(7,17,27,.8);
    }
	}
</style>
