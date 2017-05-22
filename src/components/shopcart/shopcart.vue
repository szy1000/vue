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
  				另需配送费¥{{deliveryPrice}}元
  			</div>
  		</div>
  		<div class="content-right">
  			<div class="pay">
  				¥{{minPrice}}起送
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {
		props: {
			deliveryPrice: {
				type: Number,
				default: 0
			},
			minPrice: {
				type: Number,
				default: 0
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
		// height: 48px;
		.content{
			display: flex;
			background-color: #141d27;
			.content-left{
				height: 48px;
				flex: 1;
				font-size: 0;
				&>div{
					display: inline-block;
				}
			}
			.price,.desc{
				vertical-align: top;
				margin-top: 12px;
				padding-right: 12px;
				line-height: 24px;
				color: rgba($white,.4);
			}
			.price{
				font-size: 16px;
				color: rgba($white,.4);				
				font-weight: 700;
				border-right: 1px solid rgba($white,.1);
			}
			.desc{
				margin: 12px 0 0 12px;
				color: rgba($white,.4);				
				font-size: 10px;
			}
			.content-right{
				flex: 0 0 105px;
				width: 105px;
			}
		}

		.logo-wrapper{
			position: relative;
			top: -10px;
			margin: 0 12px; 
			padding: 6px;
			width: 56px;
			height: 56px;
			box-sizing: border-box;
			border-radius: 50%;
			background-color: #141d27;
			.logo{
				border-radius: 50%;
				background-color: rgba($white,.2);
				text-align: center;
				span{
					line-height: 44px;
					font-size: 24px;
					color: rgba($white, .4);
				}
			}
		}

		.content-right{
			.pay{
				height: 48px;
				line-height: 48px;
				text-align: center;
				font-size: 12px;
				color: rgba($white,.4);
				font-weight: 700;
				// width: 100%;
				background-color: #2b333b;
			}
		}
	}
</style>
