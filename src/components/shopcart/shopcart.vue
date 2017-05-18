<template>
  <div class="shopcart">
  	<div class="content">
  		<div class="content-left">
  			<div class="logo-wrapper">
  				<div class="logo">
  					<span class="icon-shopping_cart"></span>
  				</div>
  			</div>
  			<div class="price">
  				¥{{0}}
  			</div>
  			<div class="desc">
  				另需配送费¥{{seller}}元
  			</div>
  		</div>
  		<div class="content-right"></div>
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
	.shopcart{
		position: fixed;
		z-index: 50;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 48px;
		.content{
			display: flex;
			background-color: #141d27;
			.content-left{
				flex: 1;
				font-size: 0;
				&>div{
					display: inline-block;
				}
			}
			.price,.desc{
				vertical-align: top;
				margin: 0 12px 12px 0;
				font-size: 24px;
				color: rgba($white,.4);
				line-height: 24px;
			}
			.desc{
				margin: 0;
				font-size: 16px;
			}
			.content-right{
				flex: 0 0 105px;
				width: 105px;
			}
		}

		.logo-wrapper{
			position: relative;
			top: -12px;
			margin: 0 12px; 
			padding: 6px;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-color: #141d27;
			.logo{
				margin: 0 auto;
				width: 38px;
				height: 38px;
				border-radius: 50%;
				background-color: rgba($white,.2);
				text-align: center;
				line-height: 24px;
				span{
					line-height: 44px;
					font-size: 24px;
					color: rgba($white, .4);
				}
			}
		}
	}
</style>
