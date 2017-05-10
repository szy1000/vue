<template>
  <div class="header">
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
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
  	</div>
  	<div class="bullentin-wrapper">
  		bullentin
  	</div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../../common/common.scss";

	.header{
    color: $white;
    background-color: $black;
		.header-wrapper{
			padding: 24px 12px 18px 24px;
      .content{
        margin-left: 16px;
      }
    }
    .title{
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

		.bullentin-wrapper{

		}
	}
</style>
